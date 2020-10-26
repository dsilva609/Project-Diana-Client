import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookSearchResult } from 'src/app/book/book-search/state/book-search.model';
import { BookSearchState, BookSearchStore } from 'src/app/book/book-search/state/book-search.store';

@Injectable({ providedIn: 'root' })
export class BookSearchQuery extends QueryEntity<
  BookSearchState,
  BookSearchResult
> {
  constructor(protected store: BookSearchStore) {
    super(store);
  }
}
