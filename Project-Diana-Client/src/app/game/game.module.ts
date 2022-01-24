import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameDetailsComponent } from 'src/app/game/details/game-details.component';
import { GameFormComponent } from 'src/app/game/game-form/game-form.component';
import { GameListComponent } from 'src/app/game/game-list/game-list.component';
import { GameSearchComponent } from 'src/app/game/game-search/game-search.component';
import { GAME_ROUTES } from 'src/app/game/game.routes';
import { GameSearchedComponent } from 'src/app/game/submission/game-searched/game-searched.component';
import { GameSubmissionComponent } from 'src/app/game/submission/game-submission.component';
import { GameUpdateComponent } from 'src/app/game/update/game-update/game-update.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GameListComponent,
    GameDetailsComponent,
    GameSubmissionComponent,
    GameFormComponent,
    GameUpdateComponent,
    GameSearchComponent,
    GameSearchedComponent,
  ],
  imports: [RouterModule.forChild(GAME_ROUTES), SharedModule],
})
export class GameModule {}
