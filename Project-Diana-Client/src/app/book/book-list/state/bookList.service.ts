import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookListStore } from 'src/app/book/book-list/state/bookList.store';
import { Book } from 'src/app/book/book.model';

@Injectable({ providedIn: 'root' })
export class BookListService {
  constructor(protected bookStore: BookListStore, private http: HttpClient) {}

  getBookList(bookCount: number): Observable<Book[]> {
    return this.http
      .get<Book[]>(`Book/GetBookList?itemCount=${bookCount}`)
      .pipe(tap((bookList) => this.bookStore.set(bookList)));
  }
}
