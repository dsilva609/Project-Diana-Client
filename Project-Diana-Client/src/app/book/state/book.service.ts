import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from 'src/app/book/book.model';
import { BookStore } from 'src/app/book/state/book.store';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(protected bookStore: BookStore, private http: HttpClient) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Book/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.bookStore.update({
          isShowcased: true,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  getBookById(id: string): Observable<Book> {
    return this.http
      .get<Book>(`Book/${id}`)
      .pipe(tap((book) => this.bookStore.update(book)));
  }

  incrementReadCount(id: string, readCount: number): Observable<boolean> {
    return this.http.put(`Book/IncrementReadCount/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.bookStore.update({
          lastCompletedOn: updatedTime,
          timesCompleted: readCount,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  removeFromShowcase(id: string): Observable<boolean> {
    return this.http.put(`Book/RemoveFromShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.bookStore.update({
          isShowcased: false,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  submitBook(bookFormData): Observable<boolean> {
    return this.http.post<boolean>('Book/CreateBook', bookFormData).pipe(
      tap((successful) => {
        return successful;
      })
    );
  }

  updateBook(bookFormData): Observable<boolean> {
    return this.http.put<boolean>('Book/UpdateBook', bookFormData).pipe(
      tap((updateResult) => {
        if (updateResult) {
          this.bookStore.update(bookFormData);
        }
      })
    );
  }
}
