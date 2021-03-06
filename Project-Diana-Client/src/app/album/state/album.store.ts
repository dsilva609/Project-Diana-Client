import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Album, createAlbum } from 'src/app/album/album.model';

export interface AlbumState extends EntityState<Album> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'album', resettable: true })
export class AlbumStore extends EntityStore<Album> {
  constructor() {
    super(createAlbum());
  }
}
