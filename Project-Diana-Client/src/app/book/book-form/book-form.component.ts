import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { BOOK_MEDIA_TYPES } from 'src/app/book/book.model';
import { getReleaseYears, ITEM_COMPLETION_STATUSES } from 'src/app/shared/item/item.model';

@UntilDestroy()
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  bookForm: UntypedFormGroup;
  completionStatuses = ITEM_COMPLETION_STATUSES;
  mediaTypes = BOOK_MEDIA_TYPES;
  releaseYears = getReleaseYears();
  currentDate = new Date().toUTCString();
  datePipe: DatePipe;
  showReissueYear: false;

  @Input() completionStatus: number;
  @Input() media: number;
  @Input() releaseYear: number;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      author: '',
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
      genre: '',
      imageUrl: '',
      isbn10: '',
      isbn13: '',
      isFirstEdition: false,
      isHardcover: false,
      isNewPurchase: false,
      isPhysical: false,
      isReissue: false,
      itemStorage: this.formBuilder.group({
        container: '',
        containerCode: '',
        location: '',
      }),
      language: '',
      linkedWishId: 0,
      locationPurchased: '',
      notes: '',
      pageCount: 0,
      publisher: '',
      purchasedOn: this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'),
      readCount: 0,
      reissueYear: null,
      title: '',
      type: 0,
      yearReleasedOn: new Date(this.currentDate).getFullYear(),
    });

    this.bookForm.valueChanges
      .pipe(
        tap((data) => {
          this.showReissueYear = data.isReissue;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
