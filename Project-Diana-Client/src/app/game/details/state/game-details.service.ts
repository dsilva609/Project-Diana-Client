import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GameDetailsStore } from 'src/app/game/details/state/game-details.store';
import { Game } from 'src/app/game/game.model';

@Injectable({ providedIn: 'root' })
export class GameDetailsService {
  constructor(
    private gameDetailsStore: GameDetailsStore,
    private http: HttpClient
  ) {}

  getGameById(id: string): Observable<Game> {
    return this.http
      .get<Game>(`Game/${id}`)
      .pipe(tap((game) => this.gameDetailsStore.update(game)));
  }
}
