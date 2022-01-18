import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { MovieDetailsQuery } from 'src/app/movie/movie-details/state/movie-details.query';
import { MovieDetailsService } from 'src/app/movie/movie-details/state/movie-details.service';
import { getMovieMediaTypeDisplayName, Movie } from 'src/app/movie/movie.model';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails = of<Movie>();
  movieId = '';
  isMovieShowcaseUpdateLoading = false;
  isIncrementReadCountLoading = false;

  constructor(
    private movieDetailsQuery: MovieDetailsQuery,
    private movieDetailsService: MovieDetailsService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieDetailsService
      .getMovieById(this.movieId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.movieDetails = this.movieDetailsQuery.select();
  }

  getCompletionStatusDisplayName(value: number): string {
    return getCompletionStatusDisplayName(value);
  }

  getMovieMediaTypeDisplayName(value: number): string {
    return getMovieMediaTypeDisplayName(value);
  }

  isViewable(): boolean {
    return (
      this.userQuery.getValue()?.id &&
      this.movieDetailsQuery.getValue().userId ===
        String(this.userQuery.getValue().id)
    );
  }
}
