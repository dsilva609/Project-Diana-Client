import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumSearchResult } from 'src/app/album/search/state/album-search.model';
import { AlbumSearchStore } from 'src/app/album/search/state/album-search.store';

@Injectable({ providedIn: 'root' })
export class AlbumSearchService {
  constructor(
    private albumSearchStore: AlbumSearchStore,
    private http: HttpClient
  ) {}

  searchForAlbum(searchData): Observable<boolean> {
    const paramList = new HttpParams()
      .set('album', searchData.album || '')
      .set('artist', searchData.artist || '');

    return this.http
      .get<AlbumSearchResult[]>(`Album/SearchForAlbum`, { params: paramList })
      .pipe(
        map((response) => {
          this.albumSearchStore.set(response);

          return true;
        })
      );
  }

  setAlbumToAdd(resultId: number): void {
    this.albumSearchStore.setActive(resultId);
  }
}
