import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';
import { ShowcaseListStore } from 'src/app/showcase/showcase-list/state/showcase-list.store';

@Injectable({ providedIn: 'root' })
export class ShowcaseListService {
  constructor(
    private showcaseListStore: ShowcaseListStore,
    private http: HttpClient
  ) {}

  clearAlbumShowcase(): Observable<boolean> {
    return this.http.get('Album/ClearShowcase').pipe(
      map((response) => {
        this.showcaseListStore.update({
          showcasedAlbums: [],
        });

        return true;
      })
    );
  }

  getShowcase(userId: string): Observable<ShowcaseListResponse> {
    return this.http
      .get<ShowcaseListResponse>(`Showcase/GetShowcase?userId=${userId}`)
      .pipe(
        tap((showcaseListResponse) => {
          this.showcaseListStore.update(showcaseListResponse);
        })
      );
  }
}
