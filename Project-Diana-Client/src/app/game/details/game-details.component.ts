import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { GameDetailsService } from 'src/app/game/details/state/game-details.service';
import { Game, getGameMediaTypeDisplayName } from 'src/app/game/game.model';
import { GameQuery } from 'src/app/game/state/game.query';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
@Component({
  selector: 'app-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  game: Game;
  gameId = '';
  isGameShowcaseUpdateLoading = false;
  isIncrementReadCountLoading = false;

  constructor(
    private gameQuery: GameQuery,
    private gameDetailsService: GameDetailsService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');

    this.gameDetailsService
      .getGameById(this.gameId)
      .pipe(
        tap((g) => (this.game = g)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  getCompletionStatusDisplayName(value: number): string {
    return getCompletionStatusDisplayName(value);
  }

  getGameMediaTypeDisplayName(value: number): string {
    return getGameMediaTypeDisplayName(value);
  }

  isViewable(): boolean {
    return (
      this.userQuery.getValue()?.id &&
      this.gameQuery.getValue().userId == String(this.userQuery.getValue().id)
    );
  }
}
