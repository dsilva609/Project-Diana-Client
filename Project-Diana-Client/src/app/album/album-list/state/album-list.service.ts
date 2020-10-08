import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumListResponse } from 'src/app/album/album-list/state/album-list.model';
import { AlbumListStore } from 'src/app/album/album-list/state/album-list.store';

@Injectable({ providedIn: 'root' })
export class AlbumListService {
  constructor(
    protected albumListStore: AlbumListStore,
    private http: HttpClient
  ) {}

  getAlbumList(albumCount: number, page: number): Observable<number> {
    return this.http
      .get<AlbumListResponse>(
        `Album/GetAlbumList?itemCount=${albumCount}&page=${
          page <= 1 ? 0 : page - 1
        }`
      )
      .pipe(
        map((response) => {
          this.albumListStore.set(response.albums);

          return response.totalCount;
        })
      );
  }
}
