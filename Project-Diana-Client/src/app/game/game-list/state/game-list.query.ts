import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GameListStore } from 'src/app/game/game-list/state/game-list.store';
import { Game } from 'src/app/game/game.model';
import { GameState } from 'src/app/game/state/game.store';

@Injectable({ providedIn: 'root' })
export class GameListQuery extends QueryEntity<GameState, Game> {
  constructor(protected store: GameListStore) {
    super(store);
  }
}
