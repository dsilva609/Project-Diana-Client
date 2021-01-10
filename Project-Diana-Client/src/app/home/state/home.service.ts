import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumListResponse } from 'src/app/album/album-list/state/album-list.model';
import { BookListResponse } from 'src/app/book/book-list/state/book-list.model';
import { HomeStore } from 'src/app/home/state/home.store';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(protected homeStore: HomeStore, private http: HttpClient) {}

  getLatestAlbums(itemCount: number): Observable<AlbumListResponse> {
    const paramList = new HttpParams().set('itemCount', itemCount.toString());

    return this.http
      .get<AlbumListResponse>('Album/GetLatestAlbums', { params: paramList })
      .pipe(
        map((response) => {
          this.homeStore.update({ latestAlbums: response });

          return response;
        })
      );
  }

  getLatestBooks(itemCount: number): Observable<BookListResponse> {
    const paramList = new HttpParams().set('itemCount', itemCount.toString());

    return this.http
      .get<BookListResponse>('Book/GetLatestBooks', { params: paramList })
      .pipe(
        map((response) => {
          this.homeStore.update({ latestBooks: response });

          return response;
        })
      );
  }
}
