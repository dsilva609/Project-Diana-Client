import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { GAME_MEDIA_TYPES } from 'src/app/game/game.model';
import { getReleaseYears, ITEM_COMPLETION_STATUSES } from 'src/app/shared/item/item.model';

@UntilDestroy()
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  gameForm: FormGroup;
  completionStatuses = ITEM_COMPLETION_STATUSES;
  mediaTypes = GAME_MEDIA_TYPES;
  releaseYears = getReleaseYears();
  currentDate = new Date().toUTCString();
  datePipe: DatePipe;
  showReissueYear = false;

  @Input() completionStatus: number;
  @Input() media: number;
  @Input() releaseYear: number;

  constructor(private formBuilder: FormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      bggId: 0,
      category: '',
      checkout: this.formBuilder.group({
        checkedOutOn: '',
        checkoutReason: '',
        expectedReturnOn: null,
        isCheckedOut: false,
      }),
      completionStatus: 0,
      countryOfOrigin: '',
      countryPurchased: '',
      developer: '',
      genre: '',
      giantBombId: 0,
      imageUrl: '',
      isDLC: false,
      isFirstEdition: false,
      isNew: false,
      isPhysical: false,
      isReissue: false,
      isShowcased: false,
      itemStorage: this.formBuilder.group({
        container: '',
        containerCode: '',
        location: '',
      }),
      language: '',
      locationPurchased: '',
      notes: '',
      partOfSeries: '',
      platform: 0,
      publisher: '',
      purchasedOn: this.datePipe.transform(this.currentDate, 'YYYY-MM-dd'),
      rating: '',
      reissueYear: null,
      series: '',
      timesCompleted: 0,
      title: '',
      type: '',
      yearReleasedOn: new Date(this.currentDate).getFullYear(),
    });

    this.gameForm.valueChanges
      .pipe(
        tap((data) => (this.showReissueYear = data.isReissue)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
