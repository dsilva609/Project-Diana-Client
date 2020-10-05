import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookListStore, BookState } from 'src/app/book/book-list/state/bookList.store';
import { Book } from 'src/app/book/book.model';

@Injectable({ providedIn: 'root' })
export class BookListQuery extends QueryEntity<BookState, Book> {
  constructor(protected store: BookListStore) {
    super(store);
  }
}
