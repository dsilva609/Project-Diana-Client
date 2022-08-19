import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieFormComponent } from 'src/app/movie/movie-form/movie-form.component';
import { MovieSearchResult } from 'src/app/movie/movie-search/state/movie-search.model';
import { MovieSearchQuery } from 'src/app/movie/movie-search/state/movie-search.query';
import { MovieSearchService } from 'src/app/movie/movie-search/state/movie-search.service';
import { MovieService } from 'src/app/movie/state/movie.service';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-searched',
  templateUrl: './movie-searched.component.html',
  styleUrls: ['./movie-searched.component.scss'],
})
export class MovieSearchedComponent implements OnInit, AfterViewInit {
  searchedMovie = of<MovieSearchResult>();
  movieSubmissionForm: UntypedFormGroup;

  @ViewChild('movieForm') movieForm: MovieFormComponent;

  constructor(
    private movieSearchQuery: MovieSearchQuery,
    private movieSearchService: MovieSearchService,
    private movieService: MovieService,
    private router: Router,
    private toastrService: ToastrService,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {
    this.movieSubmissionForm = new UntypedFormGroup({});
  }

  ngOnInit(): void {
    const selectedSearchedMovie =
      this.movieSearchQuery.getActive() as MovieSearchResult;

    this.searchedMovie = this.movieSearchService
      .getSearchedMovieDetails(
        selectedSearchedMovie.movieCategory,
        selectedSearchedMovie.id
      )
      .pipe(untilDestroyed(this));
  }

  ngAfterViewInit(): void {
    this.movieSubmissionForm.addControl('movieData', this.movieForm.movieForm);

    this.searchedMovie
      .pipe(
        tap((movie) =>
          this.movieForm.movieForm.patchValue({
            countryOfOrigin: movie.countryOfOrigin,
            distributor: movie.distributor,
            genre: movie.genre,
            imageUrl: movie.imageUrl,
            language: movie.language,
            movieCategory: movie.movieCategory,
            title: movie.title,
            tmdbId: movie.id,
            yearReleasedOn: movie.yearReleasedOn,
          })
        ),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(movieFormData): void {
    const linkedWishId = this.wishQuery.getActiveId();
    movieFormData.movieData.linkedWishId = linkedWishId;

    this.movieService
      .submitMovie(movieFormData.movieData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.movieSearchService.reset();
            this.wishService.resetActiveWish(linkedWishId);
            this.toastrService.success('New movie added');
            this.router.navigateByUrl('/movie');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
