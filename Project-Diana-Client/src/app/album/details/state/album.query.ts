import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Album } from 'src/app/album/album.model';
import { AlbumStore } from 'src/app/album/details/state/album.store';

@Injectable({ providedIn: 'root' })
export class AlbumQuery extends QueryEntity<Album> {
  constructor(protected store: AlbumStore) {
    super(store);
  }
}
