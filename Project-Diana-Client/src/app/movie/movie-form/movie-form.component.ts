import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { MOVIE_MEDIA_TYPES, MOVIE_RATINGS } from 'src/app/movie/movie.model';
import { getReleaseYears, ITEM_COMPLETION_STATUSES } from 'src/app/shared/item/item.model';

@UntilDestroy()
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  completionStatuses = ITEM_COMPLETION_STATUSES;
  mediaTypes = MOVIE_MEDIA_TYPES;
  ratings = MOVIE_RATINGS;
  releaseYears = getReleaseYears();
  currentDate = new Date().toUTCString();
  datePipe: DatePipe;
  showReissueYear = false;

  @Input() completionStatus: number;
  @Input() media: number;
  @Input() mediaRating: number;
  @Input() releaseYear: number;

  constructor(private formBuilder: FormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
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
      director: '',
      distributor: '',
      genre: '',
      imageUrl: '',
      isFirstEdition: false,
      isNew: false,
      isPhysical: false,
      isReissue: false,
      itemStorage: this.formBuilder.group({
        container: '',
        containerCode: '',
        location: '',
      }),
      language: '',
      locationPurchased: '',
      notes: '',
      purchasedOn: this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'),
      rating: 0,
      reissueYear: 0,
      seasonNumber: 0,
      timesCompleted: 0,
      tmdbId: 0,
      title: '',
      type: 0,
      yearReleasedOn: new Date(this.currentDate).getFullYear(),
    });

    this.movieForm.valueChanges
      .pipe(
        tap((data) => (this.showReissueYear = data.isReissue)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
