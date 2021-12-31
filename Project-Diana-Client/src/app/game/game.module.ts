import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameListComponent } from 'src/app/game/game-list/game-list.component';
import { GAME_ROUTES } from 'src/app/game/game.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GameListComponent],
  imports: [RouterModule.forChild(GAME_ROUTES), SharedModule],
})
export class GameModule {}
