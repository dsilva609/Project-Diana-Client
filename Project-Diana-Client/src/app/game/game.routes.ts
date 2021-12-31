import { Routes } from '@angular/router';
import { GameListComponent } from 'src/app/game/game-list/game-list.component';

export const GAME_ROUTES: Routes = [
  { path: '', component: GameListComponent, data: { title: 'Games' } },
];
