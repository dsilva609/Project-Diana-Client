import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Game } from 'src/app/game/game.model';
import { GameStore } from 'src/app/game/state/game.store';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private gameStore: GameStore, private http: HttpClient) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Game/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.gameStore.update({
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
      .pipe(tap((game) => this.gameStore.update(game)));
  }

  incrementPlayCount(id: string, playCount: number): Observable<boolean> {
    return this.http.put(`Game/IncrementPlayCount/${id}`, null).pipe(
      map((reaponse) => {
        const updatedTime = new Date().toUTCString();

        this.gameStore.update({
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

        this.gameStore.update({
          isShowcased: false,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }
}
