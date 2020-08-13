import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlbumStore } from 'src/app/album/state/album.store';

import { Album } from './album.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(protected albumStore: AlbumStore, private http: HttpClient) {}

  getAlbumList(albumCount: number): Observable<Album[]> {
    return this.http
      .get<Album[]>(`Album/GetAlbumList?itemCount=${albumCount}`)
      .pipe(
        tap((albumList) => {
          this.albumStore.set(albumList);
        })
      );
  }
}
