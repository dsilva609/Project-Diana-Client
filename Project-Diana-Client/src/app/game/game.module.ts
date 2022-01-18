import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameDetailsComponent } from 'src/app/game/details/game-details.component';
import { GameListComponent } from 'src/app/game/game-list/game-list.component';
import { GAME_ROUTES } from 'src/app/game/game.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GameListComponent, GameDetailsComponent],
  imports: [RouterModule.forChild(GAME_ROUTES), SharedModule],
})
export class GameModule {}
