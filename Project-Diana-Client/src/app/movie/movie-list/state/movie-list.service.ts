import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieListResponse } from 'src/app/movie/movie-list/state/movie-list.model';
import { MovieListStore } from 'src/app/movie/movie-list/state/movie-list.store';

@Injectable({ providedIn: 'root' })
export class MovieListService {
  constructor(
    private movieListStore: MovieListStore,
    private http: HttpClient
  ) {}

  getMovieList(
    movieCount: number,
    page: number,
    query: string
  ): Observable<number> {
    const paramList = new HttpParams()
      .set('itemCount', movieCount.toString())
      .set('page', (page <= 1 ? 0 : page - 1).toString())
      .set('searchQuery', query);

    return this.http
      .get<MovieListResponse>('Movie/GetMovieList', { params: paramList })
      .pipe(
        map((response) => {
          this.movieListStore.set(response.movies);

          return response.totalCount;
        })
      );
  }
}
