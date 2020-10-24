import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlbumSearchResult } from 'src/app/album/search/state/album-search.model';
import { AlbumSearchState, AlbumSearchStore } from 'src/app/album/search/state/album-search.store';

@Injectable({ providedIn: 'root' })
export class AlbumSearchQuery extends QueryEntity<
  AlbumSearchState,
  AlbumSearchResult
> {
  constructor(protected store: AlbumSearchStore) {
    super(store);
  }
}
