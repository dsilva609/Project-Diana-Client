import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { Book } from 'src/app/book/book.model';
import { BookQuery } from 'src/app/book/details/state/book.query';
import { BookService } from 'src/app/book/details/state/book.service';

@UntilDestroy()
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent implements OnInit, AfterViewInit {
  book = of<Book>();
  bookId: string;
  bookUpdateForm: FormGroup;
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

    this.bookUpdateForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.bookUpdateForm.addControl('bookData', this.bookForm.bookForm);

    this.book
      .pipe(
        tap((book) => {
          const date = this.datePipe.transform(
            book.datePurchased,
            'yyyy-MM-dd'
          );

          this.bookForm.bookForm.patchValue({
            author: book.author,
            category: book.category,
            completionStatus: book.completionStatus,
            countryOfOrigin: book.countryOfOrigin,
            countryPurchased: book.countryPurchased,
            datePurchased: this.datePipe.transform(
              book.datePurchased,
              'yyyy-MM-dd'
            ),
            genre: book.genre,
            imageUrl: book.imageUrl,
            isbn10: book.isbn10,
            isbn13: book.isbn13,
            isFirstEdition: book.isFirstEdition,
            isHardCover: book.hardcover,
            isNewPurchase: book.isNew,
            isPhysical: book.isPhysical,
            isReissue: book.isReissue,
            language: book.language,
            locationPurchased: book.locationPurchased,
            notes: book.notes,
            pageCount: book.pageCount,
            publisher: book.publisher,
            readCount: book.timesCompleted,
            reissueYear: book.reissueYear,
            title: book.title,
            type: book.type,
            yearReleased: book.yearReleased,
          });
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(bookFormData): void {
    bookFormData.bookData.bookId = Number(this.bookId);

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
