import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { Game, getGameMediaTypeDisplayName } from 'src/app/game/game.model';
import { GameQuery } from 'src/app/game/state/game.query';
import { GameService } from 'src/app/game/state/game.service';
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
  isIncrementPlayCountLoading = false;

  constructor(
    private gameQuery: GameQuery,
    private gameService: GameService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');

    this.gameService
      .getGameById(this.gameId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.gameQuery
      .select()
      .pipe(tap((g) => (this.game = g), untilDestroyed(this)))
      .subscribe();
  }

  addToShowcase(): void {
    this.isGameShowcaseUpdateLoading = true;

    this.gameService
      .addToShowcase(this.gameId.toString())
      .pipe(
        tap((successful) => {
          successful
            ? this.toastrService.success('Game added to showcase')
            : this.toastrService.error('Unable to add game to showcase');

          this.isGameShowcaseUpdateLoading = false;
        }),
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

  incrementPlayCount(): void {
    this.isIncrementPlayCountLoading = true;

    this.gameService
      .incrementPlayCount(this.game.id.toString(), this.game.timesCompleted)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.game.timesCompleted++;
            this.toastrService.success('Game play count updated');
          }

          this.isIncrementPlayCountLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  isViewable(): boolean {
    return (
      this.userQuery.getValue()?.id &&
      this.game.userId == String(this.userQuery.getValue().id)
    );
  }

  removeFromShowcase(): void {
    this.isGameShowcaseUpdateLoading = true;

    this.gameService
      .removeFromShowcase(this.gameId.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Game removed from showcase');
          }

          this.isGameShowcaseUpdateLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
