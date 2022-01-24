import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MovieSearchResult } from 'src/app/movie/movie-search/state/movie-search.model';
import {
  MovieSearchState,
  MovieSearchStore,
} from 'src/app/movie/movie-search/state/movie-search.store';

@Injectable({ providedIn: 'root' })
export class MovieSearchQuery extends QueryEntity<
  MovieSearchState,
  MovieSearchResult
> {
  constructor(protected store: MovieSearchStore) {
    super(store);
  }
}
