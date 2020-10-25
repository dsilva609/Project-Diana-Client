import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BOOK_MEDIA_TYPES } from 'src/app/book/book.model';
import { getReleaseYears, ITEM_COMPLETION_STATUSES } from 'src/app/shared/item/item.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  completionStatuses = ITEM_COMPLETION_STATUSES;
  mediaTypes = BOOK_MEDIA_TYPES;
  releaseYears = getReleaseYears();
  currentDate = new Date().toUTCString();
  datePipe: DatePipe;

  @Input() completionStatus: number;
  @Input() media: number;
  @Input() releaseYear: number;

  constructor(private formBuilder: FormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      author: '',
      category: '',
      completionStatus: 0,
      countryOfOrigin: '',
      countryPurchased: '',
      datePurchased: this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'),
      genre: '',
      imageUrl: '',
      isbn10: '',
      isbn13: '',
      isFirstEdition: false,
      isHardcover: false,
      isNewPurchase: false,
      isPhysical: false,
      isReissue: false,
      language: '',
      locationPurchased: '',
      notes: '',
      pageCount: 0,
      publisher: '',
      readCount: 0,
      title: '',
      type: 0,
      yearReleased: new Date(this.currentDate).getFullYear(),
    });
  }
}
