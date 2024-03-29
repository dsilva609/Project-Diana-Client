import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumListResponse } from 'src/app/album/album-list/state/album-list.model';
import { BookListResponse } from 'src/app/book/book-list/state/book-list.model';
import { GameListResponse } from 'src/app/game/game-list/state/game-list.model';
import { HomeStore } from 'src/app/home/state/home.store';
import { MovieListResponse } from 'src/app/movie/movie-list/state/movie-list.model';

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

  getLatestGames(itemCount: number): Observable<GameListResponse> {
    const paramList = new HttpParams().set('itemCount', itemCount.toString());

    return this.http
      .get<GameListResponse>('Game/GetLatestGames', { params: paramList })
      .pipe(
        map((response) => {
          this.homeStore.update({
            latestGames: response,
          });

          return response;
        })
      );
  }

  getLatestMovies(itemCount: number): Observable<MovieListResponse> {
    const paramList = new HttpParams().set('itemCount', itemCount.toString());

    return this.http
      .get<MovieListResponse>('Movie/GetLatestMovies', { params: paramList })
      .pipe(
        map((response) => {
          this.homeStore.update({
            latestMovies: response,
          });

          return response;
        })
      );
  }
}
