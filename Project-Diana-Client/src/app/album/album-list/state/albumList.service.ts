import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlbumListStore } from 'src/app/album/album-list/state/albumList.store';
import { Album } from 'src/app/album/album.model';

@Injectable({ providedIn: 'root' })
export class AlbumListService {
  constructor(
    protected albumListStore: AlbumListStore,
    private http: HttpClient
  ) {}

  getAlbumList(albumCount: number): Observable<Album[]> {
    return this.http
      .get<Album[]>(`Album/GetAlbumList?itemCount=${albumCount}`)
      .pipe(tap((albumList) => this.albumListStore.set(albumList)));
  }
}
