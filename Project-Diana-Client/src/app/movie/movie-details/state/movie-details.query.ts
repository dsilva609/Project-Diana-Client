import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MovieDetailsStore } from 'src/app/movie/movie-details/state/movie-details.store';
import { Movie } from 'src/app/movie/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieDetailsQuery extends QueryEntity<Movie> {
  constructor(protected store: MovieDetailsStore) {
    super(store);
  }
}
