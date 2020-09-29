import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from 'src/app/book/state/book.model';

import { createBook } from './book.model';

export interface BookState extends EntityState<Book> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'book' })
export class BookStore extends EntityStore<BookState, Book> {
  constructor() {
    super(createBook());
  }
}
