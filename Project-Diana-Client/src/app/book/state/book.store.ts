import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book, createBook } from 'src/app/book/book.model';

export interface BookState extends EntityState<Book> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'book', resettable: true })
export class BookStore extends EntityStore<Book> {
  constructor() {
    super(createBook());
  }
}
