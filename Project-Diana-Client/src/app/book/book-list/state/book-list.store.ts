import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Book, createBook } from 'src/app/book/book.model';
import { BookState } from 'src/app/book/state/book.store';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'bookList', resettable: true })
export class BookListStore extends EntityStore<BookState, Book> {
  constructor() {
    super(createBook());
  }
}
