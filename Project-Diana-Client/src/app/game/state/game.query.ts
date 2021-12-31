import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Game } from 'src/app/game/game.model';
import { GameStore } from 'src/app/game/state/game.store';

@Injectable({ providedIn: 'root' })
export class GameQuery extends QueryEntity<Game> {
  constructor(protected store: GameStore) {
    super(store);
  }
}
