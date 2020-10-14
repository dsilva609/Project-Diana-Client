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
        this.albumStore.update(null);

        return true;
      })
    );
  }

  getAlbumById(id: string): Observable<Album> {
    return this.http
      .get<Album>(`Album/${id}`)
      .pipe(tap((album) => this.albumStore.update(album)));
  }
}
