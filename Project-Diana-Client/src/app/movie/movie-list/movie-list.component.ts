import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieListQuery } from 'src/app/movie/movie-list/state/movie-list.query';
import { MovieListService } from 'src/app/movie/movie-list/state/movie-list.service';
import { Movie } from 'src/app/movie/movie.model';

@UntilDestroy()
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies = of<Movie[]>();
  movieCount = 24;
  page = 1;
  totalMovies = 0;
  searchForm: UntypedFormGroup;
  searchQuery = '';

  constructor(
    private movieListQuery: MovieListQuery,
    private movieListService: MovieListService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      searchQuery: '',
    });
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.queryParams.pageNum ?? 0;
    this.searchQuery = this.route.snapshot.queryParams.search ?? '';

    this.getMovies(this.page);

    this.router.navigate(['movie'], {
      queryParams: { pageNum: this.page, search: this.searchQuery },
    });
  }

  getNextPage(pageNumber: number): void {
    this.getMovies(pageNumber);

    this.router.navigate(['movie'], {
      queryParams: { pageNum: this.page, search: this.searchQuery },
    });
  }
  onSearch(query): void {
    if (!query) {
      return;
    }

    this.page = 1;
    this.searchQuery = query.searchQuery;

    this.getMovies(this.page);

    this.router
      .navigate(['movie'], {
        queryParams: { pageNum: this.page, search: this.searchQuery },
      })
      .then(() => {
        window.location.reload();
      });
  }

  private getMovies(page: number): void {
    this.movieListService
      .getMovieList(this.movieCount, page, this.searchQuery)
      .pipe(
        tap((count) => (this.totalMovies = count)),
        untilDestroyed(this)
      )
      .subscribe();

    this.movies = this.movieListQuery.selectAll().pipe(untilDestroyed(this));
  }
}
