import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Album } from 'src/app/album/album.model';
import { createShowcaseList, ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';

export interface ShowcaseListState extends EntityState<ShowcaseListResponse> {
  showcasedAlbums: Album[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'showcase-list', resettable: true })
export class ShowcaseListStore extends EntityStore<
  ShowcaseListState,
  ShowcaseListResponse
> {
  constructor() {
    super(createShowcaseList);
  }
}
