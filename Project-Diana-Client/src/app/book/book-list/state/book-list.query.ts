import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookListStore } from 'src/app/book/book-list/state/book-list.store';
import { Book } from 'src/app/book/book.model';
import { BookState } from 'src/app/book/state/book.store';

@Injectable({ providedIn: 'root' })
export class BookListQuery extends QueryEntity<BookState, Book> {
  constructor(protected store: BookListStore) {
    super(store);
  }
}
