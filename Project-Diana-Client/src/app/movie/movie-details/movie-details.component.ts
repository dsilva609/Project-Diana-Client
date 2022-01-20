import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { getMovieMediaTypeDisplayName, getMovieRatingDisplayName, Movie } from 'src/app/movie/movie.model';
import { MovieQuery } from 'src/app/movie/state/movie.query';
import { MovieService } from 'src/app/movie/state/movie.service';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  movieId = '';
  isMovieShowcaseUpdateLoading = false;
  isIncrementPlayCountLoading = false;

  constructor(
    private movieQuery: MovieQuery,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService
      .getMovieById(this.movieId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.movieQuery
      .select()
      .pipe(
        tap((m) => (this.movie = m)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  addToShowcase(): void {
    this.isMovieShowcaseUpdateLoading = true;

    this.movieService
      .addToShowcase(this.movieId.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Movie added to showcase');
          } else {
            this.toastrService.error('Unable to add movie to showcase');
          }

          this.isMovieShowcaseUpdateLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  getCompletionStatusDisplayName(value: number): string {
    return getCompletionStatusDisplayName(value);
  }

  getMovieMediaTypeDisplayName(value: number): string {
    return getMovieMediaTypeDisplayName(value);
  }

  getMovieRatingDisplayName(value: number): string {
    return getMovieRatingDisplayName(value);
  }

  incrementPlayCount(): void {
    this.isIncrementPlayCountLoading = true;

    this.movieService
      .incrementPlayCount(this.movieId, this.movie.timesCompleted)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.movie.timesCompleted++;
            this.toastrService.success('Movie play count updated');
          }

          this.isIncrementPlayCountLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  isViewable(): boolean {
    return (
      this.userQuery.getValue()?.id &&
      this.movie.userId === String(this.userQuery.getValue().id)
    );
  }

  removeFromShowcase(): void {
    this.isMovieShowcaseUpdateLoading = true;

    this.movieService
      .removeFromShowcase(this.movieId.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Movie removed from showcase');
          }

          this.isMovieShowcaseUpdateLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
