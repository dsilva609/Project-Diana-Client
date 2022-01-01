import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Movie } from 'src/app/movie/movie.model';
import { MovieStore } from 'src/app/movie/state/movie.store';

@Injectable({ providedIn: 'root' })
export class MovieQuery extends QueryEntity<Movie> {
  constructor(protected store: MovieStore) {
    super(store);
  }
}
