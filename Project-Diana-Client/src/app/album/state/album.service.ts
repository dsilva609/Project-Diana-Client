import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Album } from 'src/app/album/state/album.model';
import { AlbumStore } from 'src/app/album/state/album.store';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(protected albumStore: AlbumStore, private http: HttpClient) {}

  getAlbumList(): Observable<Album[]> {
    return this.http.get<Album[]>('Album/GetAlbumList').pipe(
      tap((albums) => {
        this.albumStore.set(albums);
      })
    );
  }
}
