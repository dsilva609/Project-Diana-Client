import { Routes } from '@angular/router';
import { GameDetailsComponent } from 'src/app/game/details/game-details.component';
import { GameListComponent } from 'src/app/game/game-list/game-list.component';

export const GAME_ROUTES: Routes = [
  {
    path: '',
    component: GameListComponent,
    data: { title: 'Games' },
  },
  {
    path: ':id',
    component: GameDetailsComponent,
    data: { title: 'Games' },
  },
];
