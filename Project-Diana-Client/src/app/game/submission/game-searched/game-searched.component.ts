import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GameFormComponent } from 'src/app/game/game-form/game-form.component';
import { GameSearchResult } from 'src/app/game/game-search/state/game-search.model';
import { GameSearchQuery } from 'src/app/game/game-search/state/game-search.query';
import { GameSearchService } from 'src/app/game/game-search/state/game-search.service';
import { GameService } from 'src/app/game/state/game.service';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@UntilDestroy()
@Component({
  selector: 'app-game-searched',
  templateUrl: './game-searched.component.html',
  styleUrls: ['./game-searched.component.scss'],
})
export class GameSearchedComponent implements OnInit, AfterViewInit {
  searchedGame = of<GameSearchResult>();
  gameSubmissionForm: UntypedFormGroup;

  @ViewChild('gameForm') gameForm: GameFormComponent;

  constructor(
    private gameSearchQuery: GameSearchQuery,
    private gameSearchService: GameSearchService,
    private gameService: GameService,
    private router: Router,
    private toastrService: ToastrService,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {
    this.gameSubmissionForm = new UntypedFormGroup({});
  }

  ngOnInit(): void {
    const selectedSearchedGame =
      this.gameSearchQuery.getActive() as GameSearchResult;

    this.searchedGame = this.gameSearchService
      .getSearchedGameDetails(
        selectedSearchedGame.gameCategory,
        selectedSearchedGame.id
      )
      .pipe(untilDestroyed(this));
  }

  ngAfterViewInit(): void {
    this.gameSubmissionForm.addControl('gameData', this.gameForm.gameForm);

    this.searchedGame
      .pipe(
        tap((game) =>
          this.gameForm.gameForm.patchValue({
            bggId: game.gameCategory === 1 ? game.id : 0,
            developer: game.developer,
            genre: game.genre,
            giantBombId: game.gameCategory === 2 ? game.id : 0,
            imageUrl: game.imageUrl,
            publisher: game.publisher || '',
            title: game.title,
            yearReleasedOn: game.yearReleasedOn,
          })
        ),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(gameformData): void {
    const linkedWishId = this.wishQuery.getActiveId();
    gameformData.gameData.linkedWishId = linkedWishId;

    this.gameService
      .submitGame(gameformData.gameData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.gameSearchService.reset();
            this.wishService.resetActiveWish(linkedWishId);
            this.toastrService.success('New game added');
            this.router.navigateByUrl('/game');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
