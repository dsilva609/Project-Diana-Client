import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookListResponse } from 'src/app/book/book-list/state/book-list.model';
import { BookListStore } from 'src/app/book/book-list/state/book-list.store';

@Injectable({ providedIn: 'root' })
export class BookListService {
  constructor(protected bookStore: BookListStore, private http: HttpClient) {}

  getBookList(
    bookCount: number,
    page: number,
    query: string
  ): Observable<number> {
    const paramList = new HttpParams()
      .set('itemCount', bookCount.toString())
      .set('page', (page <= 1 ? 0 : page - 1).toString())
      .set('searchQuery', query);

    return this.http
      .get<BookListResponse>('Book/GetBookList', { params: paramList })
      .pipe(
        map((response) => {
          this.bookStore.set(response.books);

          return response.totalCount;
        })
      );
  }
}
