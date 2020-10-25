import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Album } from 'src/app/album/album.model';
import { AlbumStore } from 'src/app/album/state/album.store';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(protected albumStore: AlbumStore, private http: HttpClient) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Album/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.albumStore.update({
          dateUpdated: updatedTime,
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
        const updatedTime = new Date().toUTCString();

        this.albumStore.update({
          dateUpdated: updatedTime,
          lastCompleted: updatedTime,
          timesCompleted: playCount,
        });

        return true;
      })
    );
  }

  removeFromShowcase(id: string): Observable<boolean> {
    return this.http.put(`Album/RemoveFromShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.albumStore.update({
          dateUpdated: updatedTime,
          isShowcased: false,
        });

        return true;
      })
    );
  }

  submitAlbum(albumFormData): Observable<boolean> {
    return this.http
      .post<boolean>('Album/CreateAlbum', albumFormData)
      .pipe((successful) => {
        return successful;
      });
  }

  updateAlbum(albumFormData): Observable<boolean> {
    return this.http.put<boolean>('Album/UpdateAlbum', albumFormData).pipe(
      tap((updateResult) => {
        if (updateResult) {
          this.albumStore.update(albumFormData);
        }
      })
    );
  }
}
