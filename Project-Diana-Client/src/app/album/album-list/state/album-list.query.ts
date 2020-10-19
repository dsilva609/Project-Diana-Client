import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlbumListStore } from 'src/app/album/album-list/state/album-list.store';
import { Album } from 'src/app/album/album.model';
import { AlbumState } from 'src/app/album/state/album.store';

@Injectable({ providedIn: 'root' })
export class AlbumListQuery extends QueryEntity<AlbumState, Album> {
  constructor(protected store: AlbumListStore) {
    super(store);
  }
}
