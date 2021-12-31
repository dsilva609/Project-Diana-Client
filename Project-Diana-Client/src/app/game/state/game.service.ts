import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameStore } from 'src/app/game/state/game.store';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private gameStore: GameStore, private http: HttpClient) {}
}
