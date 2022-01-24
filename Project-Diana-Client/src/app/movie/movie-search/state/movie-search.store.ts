import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {
  createMovieSearchResult,
  MovieSearchResult,
} from 'src/app/movie/movie-search/state/movie-search.model';

export interface MovieSearchState extends EntityState<MovieSearchResult> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movie-search', resettable: true })
export class MovieSearchStore extends EntityStore<
  MovieSearchState,
  MovieSearchResult
> {
  constructor() {
    super(createMovieSearchResult());
  }
}
