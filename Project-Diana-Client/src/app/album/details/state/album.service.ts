import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Album } from 'src/app/album/album.model';
import { AlbumStore } from 'src/app/album/details/state/album.store';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(protected albumStore: AlbumStore, private http: HttpClient) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Album/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        this.albumStore.update({
          isShowcased: true,
        });

        return true;
      })
    );
  }

  getAlbumById(id: string): Observable<Album> {
    return this.http
      .get<Album>(`Album/${id}`)
      .pipe(tap((album) => this.albumStore.update(album)));
  }

  incrementPlayCount(id: string, playCount: number): Observable<boolean> {
    return this.http.put(`Album/IncrementPlayCount/${id}`, null).pipe(
      map((response) => {
        this.albumStore.update({
          timesCompleted: playCount,
        });

        return true;
      })
    );
  }

  removeFromShowcase(id: string): Observable<boolean> {
    return this.http.put(`Album/RemoveFromShowcase/${id}`, null).pipe(
      map((response) => {
        this.albumStore.update({
          isShowcased: false,
        });

        return true;
      })
    );
  }
}
