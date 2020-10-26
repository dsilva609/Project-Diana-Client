import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { BookSearchResult, createBookSearchResult } from 'src/app/book/book-search/state/book-search.model';

export interface BookSearchState extends EntityState<BookSearchResult> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'book-search', resettable: true })
export class BookSearchStore extends EntityStore<
  BookSearchState,
  BookSearchResult
> {
  constructor() {
    super(createBookSearchResult());
  }
}
