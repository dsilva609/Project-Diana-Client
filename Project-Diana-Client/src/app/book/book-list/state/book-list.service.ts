import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookListResponse } from 'src/app/book/book-list/state/book-list.model';
import { BookListStore } from 'src/app/book/book-list/state/book-list.store';

@Injectable({ providedIn: 'root' })
export class BookListService {
  constructor(protected bookStore: BookListStore, private http: HttpClient) {}

  getBookList(bookCount: number, page: number): Observable<number> {
    return this.http
      .get<BookListResponse>(
        `Book/GetBookList?itemCount=${bookCount}&page=${
          page <= 1 ? 0 : page - 1
        }`
      )
      .pipe(
        map((response) => {
          this.bookStore.set(response.books);

          return response.totalCount;
        })
      );
  }
}
