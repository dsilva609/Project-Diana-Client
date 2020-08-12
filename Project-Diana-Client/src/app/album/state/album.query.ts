import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Album } from 'src/app/album/state/album.model';
import { AlbumState, AlbumStore } from 'src/app/album/state/album.store';

@Injectable({ providedIn: 'root' })
export class AlbumQuery extends QueryEntity<AlbumState, Album> {
  constructor(protected store: AlbumStore) {
    super(store);
  }
}
