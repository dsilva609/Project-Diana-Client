import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { MovieSearchResult } from 'src/app/movie/movie-search/state/movie-search.model';
import { MovieSearchQuery } from 'src/app/movie/movie-search/state/movie-search.query';
import { MovieSearchService } from 'src/app/movie/movie-search/state/movie-search.service';
import { MOVIE_CATEGORY_TYPES } from 'src/app/movie/movie.model';

@UntilDestroy()
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  searchForm: UntypedFormGroup;
  searchResults = of<MovieSearchResult[]>();
  searchTypes = MOVIE_CATEGORY_TYPES;

  constructor(
    private movieSearchQuery: MovieSearchQuery,
    private movieSearchService: MovieSearchService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      category: 0,
      title: '',
    });
  }

  ngOnInit(): void {
    const queryTitle = this.route.snapshot.queryParams.title;

    if (queryTitle) {
      this.searchForm.patchValue({
        title: queryTitle,
      });

      this.searchMovies(this.searchForm.value);
    }

    this.searchResults = this.movieSearchQuery
      .selectAll()
      .pipe(untilDestroyed(this));
  }

  searchMovies(searchData): void {
    this.movieSearchService
      .searchForMovie(searchData)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  setMovieToAdd(id: string): void {
    this.movieSearchService.setMovieToAdd(id);

    this.router.navigate([`movie/addFromSearch/${id}`]);
  }
}
