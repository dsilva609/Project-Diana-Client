import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlbumListStore, AlbumState } from 'src/app/album/album-list/state/albumList.store';
import { Album } from 'src/app/album/album.model';

@Injectable({ providedIn: 'root' })
export class AlbumListQuery extends QueryEntity<AlbumState, Album> {
  constructor(protected store: AlbumListStore) {
    super(store);
  }
}
