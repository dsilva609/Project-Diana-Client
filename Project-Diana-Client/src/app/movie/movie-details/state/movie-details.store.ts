import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { createMovie, Movie } from 'src/app/movie/movie.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movie-details', resettable: true })
export class MovieDetailsStore extends EntityStore<Movie> {
  constructor() {
    super(createMovie());
  }
}
