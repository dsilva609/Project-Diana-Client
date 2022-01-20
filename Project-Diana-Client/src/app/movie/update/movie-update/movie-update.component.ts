import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieFormComponent } from 'src/app/movie/movie-form/movie-form.component';
import { Movie } from 'src/app/movie/movie.model';
import { MovieQuery } from 'src/app/movie/state/movie.query';
import { MovieService } from 'src/app/movie/state/movie.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.scss'],
})
export class MovieUpdateComponent implements OnInit, AfterViewInit {
  movie = of<Movie>();
  movieId: string;
  movieUpdateForm: FormGroup;
  datePipe: DatePipe;

  @ViewChild('movieForm') movieForm: MovieFormComponent;

  constructor(
    private movieQuery: MovieQuery,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService
      .getMovieById(this.movieId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.movie = this.movieQuery.select();

    this.movieUpdateForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.movieUpdateForm.addControl('movieData', this.movieForm.movieForm);

    this.movie
      .pipe(
        tap((movie) => {
          const date = this.datePipe.transform(movie.purchasedOn, 'yyyy-MM-dd');

          this.movieForm.movieForm.patchValue({
            category: movie.category,
            checkout: {
              checkedOutOn: movie.checkout.checkedOutOn,
              checkoutReason: movie.checkout.checkoutReason,
              expectedReturnOn: movie.checkout.expectedReturnOn,
              isCheckedOut: movie.checkout.isCheckedOut,
            },
            completionStatus: movie.completionStatus,
            countryOfOrigin: movie.countryOfOrigin,
            countryPurchased: movie.countryPurchased,
            director: movie.director,
            distributor: movie.distributor,
            genre: movie.genre,
            imageUrl: movie.imageUrl,
            isFirstEdition: movie.isFirstEdition,
            isNew: movie.isNew,
            isPhysical: movie.isPhysical,
            isReissue: movie.isReissue,
            itemStorage: {
              container: movie.itemStorage.container,
              containerCode: movie.itemStorage.containerCode,
              location: movie.itemStorage.location,
            },
            language: movie.language,
            locationPurchased: movie.locationPurchased,
            notes: movie.notes,
            purchasedOn: this.datePipe.transform(
              movie.purchasedOn,
              'yyyy-MM-dd'
            ),
            rating: movie.rating,
            reissueYear: movie.reissueYear,
            seasonNumber: movie.seasonNumber,
            timesCompleted: movie.timesCompleted,
            tmdbId: movie.tmdbId,
            title: movie.title,
            type: movie.type,
            yearReleasedOn: movie.yearReleasedOn,
          });
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(movieFormData): void {
    movieFormData.movieData.movieId = this.movieId;

    this.movieService
      .updateMovie(movieFormData.movieData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Movie successfully updated');
            this.router.navigateByUrl('/movie');
          } else {
            this.toastrService.error('Error updating movie');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
