import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { BookSearchStore } from 'src/app/book/book-search/state/book-search.store';
import { BookService } from 'src/app/book/details/state/book.service';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@UntilDestroy()
@Component({
  selector: 'app-book-submission',
  templateUrl: './book-submission.component.html',
  styleUrls: ['./book-submission.component.scss'],
})
export class BookSubmissionComponent implements OnInit, AfterViewInit {
  bookSubmissionForm: FormGroup;

  @ViewChild('bookForm') bookForm: BookFormComponent;

  constructor(
    private router: Router,
    private bookSearchStore: BookSearchStore,
    private bookService: BookService,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.bookSubmissionForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.bookSubmissionForm.addControl('bookData', this.bookForm.bookForm);
  }

  onSubmit(bookFormData): void {
    const linkedWishId = this.wishQuery.getActiveId();
    bookFormData.bookData.linkedWishId = linkedWishId;

    this.bookService
      .submitBook(bookFormData.bookData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.bookSearchStore.reset();

            this.wishService.resetActiveWish(linkedWishId);

            this.router.navigateByUrl('/book');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
