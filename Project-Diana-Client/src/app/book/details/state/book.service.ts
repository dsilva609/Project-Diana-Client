import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from 'src/app/book/book.model';
import { BookStore } from 'src/app/book/details/state/book.store';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(protected bookStore: BookStore, private http: HttpClient) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Book/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        this.bookStore.update({ isShowcased: true });

        return true;
      })
    );
  }

  getBookById(id: string): Observable<Book> {
    return this.http
      .get<Book>(`Book/${id}`)
      .pipe(tap((book) => this.bookStore.update(book)));
  }
}
