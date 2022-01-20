import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { GameDetailsComponent } from 'src/app/game/details/game-details.component';
import { GameListComponent } from 'src/app/game/game-list/game-list.component';
import { GameSubmissionComponent } from 'src/app/game/submission/game-submission.component';
import { GameUpdateComponent } from 'src/app/game/update/game-update/game-update.component';

export const GAME_ROUTES: Routes = [
  {
    path: '',
    component: GameListComponent,
    data: { title: 'Games' },
  },
  {
    path: 'create',
    component: GameSubmissionComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Games' },
  },
  {
    path: 'update/:id',
    component: GameUpdateComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Games' },
  },
  {
    path: ':id',
    component: GameDetailsComponent,
    data: { title: 'Games' },
  },
];
