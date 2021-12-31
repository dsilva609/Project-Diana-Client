import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createGame, Game } from 'src/app/game/game.model';

export interface GameState extends EntityState<Game> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game', resettable: true })
export class GameStore extends EntityStore<Game> {
  constructor() {
    super(createGame());
  }
}
