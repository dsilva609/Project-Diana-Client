import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { MEDIA_TYPES, VINYL_SIZES, VINYL_SPEEDS } from 'src/app/album/album.model';
import { getReleaseYears, ITEM_COMPLETION_STATUSES } from 'src/app/shared/item/item.model';

@UntilDestroy()
@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss'],
})
export class AlbumFormComponent implements OnInit {
  albumForm: FormGroup;
  completionStatuses = ITEM_COMPLETION_STATUSES;
  mediaTypes = MEDIA_TYPES;
  releaseYears = getReleaseYears();
  vinylSizes = VINYL_SIZES;
  vinylSpeeds = VINYL_SPEEDS;
  currentDate = new Date().toUTCString();
  datePipe: DatePipe;
  showReissueYear = false;

  @Input() completionStatus: number;
  @Input() media: number;
  @Input() releaseYear: number;
  @Input() vinylSize: number;
  @Input() vinylSpeed: number;

  constructor(private formBuilder: FormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.albumForm = this.formBuilder.group({
      artist: '',
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
      discogsId: 0,
      genre: '',
      hasDigitalDownload: false,
      imageUrl: '',
      isNewPurchase: false,
      isPhysical: false,
      isReissue: false,
      itemStorage: this.formBuilder.group({
        container: '',
        containerCode: '',
        location: '',
      }),
      locationPurchased: '',
      mediaType: 0,
      notes: '',
      playCount: 0,
      purchasedOn: this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'),
      recordLabel: '',
      reissueYear: null,
      size: 0,
      speed: 0,
      style: '',
      title: '',
      yearReleasedOn: new Date(this.currentDate).getFullYear(),
    });

    this.albumForm.valueChanges
      .pipe(
        tap((data) => (this.showReissueYear = data.isReissue)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
