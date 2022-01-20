import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GameFormComponent } from 'src/app/game/game-form/game-form.component';
import { Game } from 'src/app/game/game.model';
import { GameQuery } from 'src/app/game/state/game.query';
import { GameService } from 'src/app/game/state/game.service';

@UntilDestroy()
@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.scss'],
})
export class GameUpdateComponent implements OnInit, AfterViewInit {
  game = of<Game>();
  gameId: string;
  gameUpdateForm: FormGroup;
  datePipe: DatePipe;

  @ViewChild('gameForm') gameForm: GameFormComponent;

  constructor(
    private gameQuery: GameQuery,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.datePipe = new DatePipe('en-us');
  }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');

    this.gameService
      .getGameById(this.gameId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.game = this.gameQuery.select();

    this.gameUpdateForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.gameUpdateForm.addControl('gameData', this.gameForm.gameForm);

    this.game
      .pipe(
        tap((game) => {
          const date = this.datePipe.transform(game.purchasedOn, 'yyyy-MM-dd');

          this.gameForm.gameForm.patchValue({
            bggId: game.bggId,
            category: game.category,
            checkout: {
              checkedOutOn: game.checkout.checkedOutOn,
              checkoutReason: game.checkout.checkoutReason,
              expectedReturnOn: this.datePipe.transform(
                game.checkout.expectedReturnOn,
                'yyyy-MM-dd'
              ),
              isCheckedOut: game.checkout.isCheckedOut,
            },
            completionStatus: game.completionStatus,
            countryOfOrigin: game.countryOfOrigin,
            countryPurchased: game.countryPurchased,
            developer: game.developer,
            genre: game.genre,
            giantBombId: game.giantBombId,
            imageUrl: game.imageUrl,
            isDLC: game.isDLC,
            isFirstEdition: game.isFirstEdition,
            isNew: game.isNew,
            isPhysical: game.isPhysical,
            isReissue: game.isReissue,
            itemStorage: {
              container: game.itemStorage.container,
              containerCode: game.itemStorage.containerCode,
              localStorage: game.itemStorage.location,
            },
            language: game.language,
            locationPurchased: game.locationPurchased,
            notes: game.notes,
            partOfSeries: game.partOfSeries,
            platform: game.platform,
            publisher: game.publisher,
            purchasedOn: this.datePipe.transform(
              game.purchasedOn,
              'yyyy-MM-dd'
            ),
            rating: game.rating,
            reissueYear: game.reissueYear,
            series: game.series,
            timesCompleted: game.timesCompleted,
            title: game.title,
            type: game.type,
            yearReleasedOn: game.yearReleasedOn,
          });
        }, untilDestroyed(this))
      )
      .subscribe();
  }

  onSubmit(gameFormData): void {
    gameFormData.gameData.gameId = this.gameId;

    this.gameService
      .updateGame(gameFormData.gameData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Game successfully updated');

            this.router.navigateByUrl('/game');
          } else {
            this.toastrService.error('Error updating game');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
