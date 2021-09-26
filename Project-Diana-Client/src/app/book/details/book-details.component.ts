import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { Book, getBookMediaTypeDisplayName } from 'src/app/book/book.model';
import { BookQuery } from 'src/app/book/details/state/book.query';
import { BookService } from 'src/app/book/details/state/book.service';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
@Component({
  selector: 'app-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  bookId = '';
  isBookShowcaseUpdateLoading = false;
  isIncrementReadCountLoading = false;

  constructor(
    private bookQuery: BookQuery,
    private bookService: BookService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    this.bookService
      .getBookById(this.bookId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.bookQuery
      .select()
      .pipe(
        tap((b) => (this.book = b)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  addToShowcase(): void {
    this.isBookShowcaseUpdateLoading = true;

    this.bookService
      .addToShowcase(this.bookId)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Book added to showcase');
          }

          this.isBookShowcaseUpdateLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  getBookMediaTypeDisplayName(value: number): string {
    return getBookMediaTypeDisplayName(value);
  }

  getCompletionStatusDisplayName(value: number): string {
    return getCompletionStatusDisplayName(value);
  }

  incrementReadCount(): void {
    this.isIncrementReadCountLoading = true;

    this.bookService
      .incrementReadCount(this.bookId.toString(), this.book.timesCompleted)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.book.timesCompleted++;
            this.toastrService.success('Book read count updated');
          }

          this.isIncrementReadCountLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  isViewable(): boolean {
    return (
      this.userQuery.getValue()?.id &&
      this.bookQuery.getValue().userId === String(this.userQuery.getValue().id)
    );
  }

  removeFromShowcase(): void {
    this.isBookShowcaseUpdateLoading = true;

    this.bookService
      .removeFromShowcase(this.bookId)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Book removed from showcase');
          }

          this.isBookShowcaseUpdateLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
