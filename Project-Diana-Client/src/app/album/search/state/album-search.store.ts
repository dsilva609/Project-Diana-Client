import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { AlbumSearchResult, createAlbumSearchResult } from 'src/app/album/search/state/album-search.model';

export interface AlbumSearchState extends EntityState<AlbumSearchResult> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'album-search', resettable: true })
export class AlbumSearchStore extends EntityStore<
  AlbumSearchState,
  AlbumSearchResult
> {
  constructor() {
    super(createAlbumSearchResult);
  }
}
