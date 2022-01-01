import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createMovie, Movie } from 'src/app/movie/movie.model';

export interface MovieState extends EntityState<Movie> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movie', resettable: true })
export class MovieStore extends EntityStore<Movie> {
  constructor() {
    super(createMovie());
  }
}
