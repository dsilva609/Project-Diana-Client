import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Album, createAlbum } from 'src/app/album/album.model';
import { AlbumState } from 'src/app/album/details/state/album.store';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'albumList', resettable: true })
export class AlbumListStore extends EntityStore<AlbumState, Album> {
  constructor() {
    super(createAlbum());
  }
}
