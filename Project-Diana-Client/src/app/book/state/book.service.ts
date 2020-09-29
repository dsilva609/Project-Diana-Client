import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookStore } from 'src/app/book/state/book.store';

import { Book } from './book.model';


@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(protected bookStore: BookStore, private http: HttpClient) {}

  getBookList(bookCount: number): Observable<Book[]> {
    return this.http
      .get<Book[]>(`Book/GetBookList?itemCount=${bookCount}`)
      .pipe(tap((bookList) => this.bookStore.set(bookList)));
  }
}
