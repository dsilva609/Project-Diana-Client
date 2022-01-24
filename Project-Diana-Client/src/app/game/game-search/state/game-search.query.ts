import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {
  GameSearchState,
  GameSearchStore,
} from 'src/app/game/game-search/state/game-search.store';

@Injectable({ providedIn: 'root' })
export class GameSearchQuery extends QueryEntity<GameSearchState> {
  constructor(protected store: GameSearchStore) {
    super(store);
  }
}
