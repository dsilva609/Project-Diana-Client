import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { createMovie, Movie } from 'src/app/movie/movie.model';
import { MovieState } from 'src/app/movie/state/movie.store';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movie-list', resettable: true })
export class MovieListStore extends EntityStore<MovieState, Movie> {
  constructor() {
    super(createMovie());
  }
}
