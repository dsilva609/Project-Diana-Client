import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GameDetailsStore } from 'src/app/game/details/state/game-details.store';
import { Game } from 'src/app/game/game.model';

@Injectable({ providedIn: 'root' })
export class GameDetailsService {
  constructor(
    private gameDetailsStore: GameDetailsStore,
    private http: HttpClient
  ) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Game/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.gameDetailsStore.update({
          isShowcased: true,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  getGameById(id: string): Observable<Game> {
    return this.http
      .get<Game>(`Game/${id}`)
      .pipe(tap((game) => this.gameDetailsStore.update(game)));
  }

  incrementPlayCount(id: string, playCount: number): Observable<boolean> {
    return this.http.put(`Game/IncrementPlayCount/${id}`, null).pipe(
      map((reaponse) => {
        const updatedTime = new Date().toUTCString();

        this.gameDetailsStore.update({
          lastCompletedOn: updatedTime,
          timesCompleted: playCount,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  removeFromShowcase(id: string): Observable<boolean> {
    return this.http.put(`Game/RemoveFromShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.gameDetailsStore.update({
          isShowcased: false,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }
}
