import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Book } from 'src/app/book/state/book.model';
import { BookState, BookStore } from 'src/app/book/state/book.store';

@Injectable({ providedIn: 'root' })
export class BookQuery extends QueryEntity<BookState, Book> {
  constructor(protected store: BookStore) {
    super(store);
  }
}
