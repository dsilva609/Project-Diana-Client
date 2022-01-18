import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { GameDetailsService } from 'src/app/game/details/state/game-details.service';
import { Game, getGameMediaTypeDisplayName } from 'src/app/game/game.model';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';
import { UserQuery } from 'src/app/user/state/user.query';

import { GameDetailsQuery } from './state/game-details.query';

@UntilDestroy()
@Component({
  selector: 'app-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  gameDetails = of<Game>();
  gameId = '';
  isGameShowcaseUpdateLoading = false;
  isIncrementReadCountLoading = false;

  constructor(
    private gameDetailsQuery: GameDetailsQuery,
    private gameDetailsService: GameDetailsService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');

    this.gameDetailsService
      .getGameById(this.gameId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.gameDetails = this.gameDetailsQuery.select();
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
      this.gameDetailsQuery.getValue().userId ==
        String(this.userQuery.getValue().id)
    );
  }
}
