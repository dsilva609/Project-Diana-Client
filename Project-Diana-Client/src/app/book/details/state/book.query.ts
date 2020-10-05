import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Book } from 'src/app/book/book.model';
import { BookStore } from 'src/app/book/details/state/book.store';

@Injectable({ providedIn: 'root' })
export class BookQuery extends QueryEntity<Book> {
  constructor(protected store: BookStore) {
    super(store);
  }
}
