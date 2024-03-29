import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BookSearchResult } from 'src/app/book/book-search/state/book-search.model';
import { BookSearchStore } from 'src/app/book/book-search/state/book-search.store';

@Injectable({ providedIn: 'root' })
export class BookSearchService {
  constructor(
    private bookSearchStore: BookSearchStore,
    private http: HttpClient
  ) {}

  getBookByVolumeId(id: string): Observable<BookSearchResult> {
    return this.http
      .get<BookSearchResult>(`Book/GetBookByVolumeId/${id}`)
      .pipe(tap((response) => response));
  }

  reset(): void {
    this.bookSearchStore.reset();
  }

  searchForBook(searchData): Observable<boolean> {
    const paramList = new HttpParams()
      .set('author', searchData.author || '')
      .set('title', searchData.title || '');

    return this.http
      .get<BookSearchResult[]>('Book/SearchForBook', { params: paramList })
      .pipe(
        map((response) => {
          this.bookSearchStore.set(response);

          return true;
        })
      );
  }

  setBookToAdd(resultId: string): void {
    this.bookSearchStore.setActive(resultId);
  }
}
