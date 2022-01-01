import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MovieListStore } from 'src/app/movie/movie-list/state/movie-list.store';
import { Movie } from 'src/app/movie/movie.model';
import { MovieState } from 'src/app/movie/state/movie.store';

@Injectable({ providedIn: 'root' })
export class MovieListQuery extends QueryEntity<MovieState, Movie> {
  constructor(protected store: MovieListStore) {
    super(store);
  }
}
