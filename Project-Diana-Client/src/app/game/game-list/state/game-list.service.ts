import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameListResponse } from 'src/app/game/game-list/state/game-list.model';
import { GameListStore } from 'src/app/game/game-list/state/game-list.store';

@Injectable({ providedIn: 'root' })
export class GameListService {
  constructor(private gameListStore: GameListStore, private http: HttpClient) {}

  getGameList(
    gameCount: number,
    page: number,
    query: string
  ): Observable<number> {
    const paramList = new HttpParams()
      .set('itemCount', gameCount.toString())
      .set('page', (page <= 1 ? 0 : page - 1).toString())
      .set('searchQuery', query);

    return this.http
      .get<GameListResponse>('Game/GetGameList', { params: paramList })
      .pipe(
        map((response) => {
          this.gameListStore.set(response.games);

          return response.totalCount;
        })
      );
  }
}
