import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GameSearchResult } from 'src/app/game/game-search/state/game-search.model';
import { GameSearchStore } from 'src/app/game/game-search/state/game-search.store';

@Injectable({ providedIn: 'root' })
export class GameSearchService {
  constructor(
    private gameSearchStore: GameSearchStore,
    private http: HttpClient
  ) {}

  getSearchedGameDetails(
    category: number,
    id: string
  ): Observable<GameSearchResult> {
    const paramList = new HttpParams()
      .set('category', category)
      .set('gameId', id);

    return this.http
      .get<GameSearchResult>('Game/GetSearchedGameDetails', {
        params: paramList,
      })
      .pipe(tap((response) => response));
  }

  reset(): void {
    this.gameSearchStore.reset();
  }

  searchForGame(searchData): Observable<boolean> {
    const paramList = new HttpParams()
      .set('category', searchData.category)
      .set('title', searchData.title);

    return this.http
      .get<GameSearchResult[]>('Game/SearchForGame', { params: paramList })
      .pipe(
        map((response) => {
          this.gameSearchStore.set(response);

          return true;
        })
      );
  }

  setGameToAdd(resultId: string): void {
    this.gameSearchStore.setActive(resultId);
  }
}
