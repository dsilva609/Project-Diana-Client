import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { Book } from 'src/app/book/book.model';
import { BookQuery } from 'src/app/book/state/book.query';
import { BookService } from 'src/app/book/state/book.service';

@UntilDestroy()
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent implements OnInit, AfterViewInit {
  book = of<Book>();
  bookId: string;
  bookUpdateForm: UntypedFormGroup;
  datePipe: DatePipe;

  @ViewChild('bookForm') bookForm: BookFormComponent;

  constructor(
    private bookQuery: BookQuery,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    this.bookService
      .getBookById(this.bookId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.book = this.bookQuery.select().pipe(untilDestroyed(this));

    this.bookUpdateForm = new UntypedFormGroup({});
  }

  ngAfterViewInit(): void {
    this.bookUpdateForm.addControl('bookData', this.bookForm.bookForm);

    this.book
      .pipe(
        tap((book) => {
          this.bookForm.bookForm.patchValue({
            author: book.author,
            category: book.category,
            checkout: {
              checkedOutOn: book.checkout.checkedOutOn,
              checkoutReason: book.checkout.checkoutReason,
              expectedReturnOn: this.datePipe.transform(
                book.checkout.expectedReturnOn,
                'yyyy-MM-dd'
              ),
              isCheckedOut: book.checkout.isCheckedOut,
            },
            completionStatus: book.completionStatus,
            countryOfOrigin: book.countryOfOrigin,
            countryPurchased: book.countryPurchased,
            genre: book.genre,
            imageUrl: book.imageUrl,
            isbn10: book.isbn10,
            isbn13: book.isbn13,
            isFirstEdition: book.isFirstEdition,
            isHardcover: book.isHardcover,
            isNewPurchase: book.isNew,
            isPhysical: book.isPhysical,
            isReissue: book.isReissue,
            itemStorage: {
              container: book.itemStorage.container,
              containerCode: book.itemStorage.containerCode,
              location: book.itemStorage.location,
            },
            language: book.language,
            locationPurchased: book.locationPurchased,
            notes: book.notes,
            pageCount: book.pageCount,
            publisher: book.publisher,
            purchasedOn: this.datePipe.transform(
              book.purchasedOn,
              'yyyy-MM-dd'
            ),
            readCount: book.timesCompleted,
            reissueYear: book.reissueYear,
            title: book.title,
            type: book.type,
            yearReleasedOn: book.yearReleasedOn,
          });
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(bookFormData): void {
    bookFormData.bookData.bookId = this.bookId;

    this.bookService
      .updateBook(bookFormData.bookData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/book');

            this.toastrService.success('Book successfully updated');
          } else {
            this.toastrService.error('Error updating book');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
