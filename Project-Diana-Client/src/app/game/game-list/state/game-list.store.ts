import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createGame, Game } from 'src/app/game/game.model';
import { GameState } from 'src/app/game/state/game.store';

export interface GameListState extends EntityState<Game> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-list', resettable: true })
export class GameListStore extends EntityStore<GameState, Game> {
  constructor() {
    super(createGame());
  }
}
