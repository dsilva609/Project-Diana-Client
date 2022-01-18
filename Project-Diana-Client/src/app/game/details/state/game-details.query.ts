import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GameDetailsStore } from 'src/app/game/details/state/game-details.store';
import { Game } from 'src/app/game/game.model';

@Injectable({ providedIn: 'root' })
export class GameDetailsQuery extends QueryEntity<Game> {
  constructor(protected store: GameDetailsStore) {
    super(store);
  }
}
