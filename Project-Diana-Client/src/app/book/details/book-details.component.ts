import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Book, getBookMediaTypeDisplayName } from 'src/app/book/book.model';
import { BookQuery } from 'src/app/book/details/state/book.query';
import { BookService } from 'src/app/book/details/state/book.service';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';

@Component({
  selector: 'app-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private bookQuery: BookQuery,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(id).subscribe();

    this.bookQuery
      .select()
      .pipe(tap((b) => (this.book = b)))
      .subscribe();
  }

  addToShowcase(): void {
    this.bookService.addToShowcase(this.book.id.toString()).subscribe();
  }

  getBookMediaTypeDisplayName(value: number): string {
    return getBookMediaTypeDisplayName(value);
  }

  getCompletionStatusDisplayName(value: number): string {
    return getCompletionStatusDisplayName(value);
  }

  incrementReadCount(): void {
    this.bookService
      .incrementReadCount(this.book.id.toString(), this.book.timesCompleted)
      .pipe(tap((_) => this.book.timesCompleted++))
      .subscribe();
  }

  removeFromShowcase(): void {
    this.bookService.removeFromShowcase(this.book.id.toString()).subscribe();
  }
}
