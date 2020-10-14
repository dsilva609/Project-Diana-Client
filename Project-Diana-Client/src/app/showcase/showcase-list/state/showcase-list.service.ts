import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';
import { ShowcaseListStore } from 'src/app/showcase/showcase-list/state/showcase-list.store';

@Injectable({ providedIn: 'root' })
export class ShowcaseListService {
  constructor(
    private showcaseListStore: ShowcaseListStore,
    private http: HttpClient
  ) {}

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
