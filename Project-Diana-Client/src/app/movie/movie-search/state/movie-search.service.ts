import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieSearchResult } from 'src/app/movie/movie-search/state/movie-search.model';
import { MovieSearchStore } from 'src/app/movie/movie-search/state/movie-search.store';

@Injectable({ providedIn: 'root' })
export class MovieSearchService {
  constructor(
    private movieSearchStore: MovieSearchStore,
    private http: HttpClient
  ) {}

  getSearchedMovieDetails(
    category: number,
    id: number
  ): Observable<MovieSearchResult> {
    const paramList = new HttpParams().set('category', category).set('id', id);

    return this.http
      .get<MovieSearchResult>('Movie/GetSearchedMovieDetails', {
        params: paramList,
      })
      .pipe(tap((response) => response));
  }

  reset(): void {
    this.movieSearchStore.reset();
  }

  searchForMovie(searchData): Observable<boolean> {
    const paramList = new HttpParams()
      .set('category', searchData.category)
      .set('title', searchData.title);

    return this.http
      .get<MovieSearchResult[]>('Movie/SearchForMovie', { params: paramList })
      .pipe(
        map((response) => {
          this.movieSearchStore.set(response);

          return true;
        })
      );
  }

  setMovieToAdd(resultId: string): void {
    this.movieSearchStore.setActive(resultId);
  }
}
