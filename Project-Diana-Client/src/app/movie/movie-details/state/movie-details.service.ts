import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieDetailsStore } from 'src/app/movie/movie-details/state/movie-details.store';
import { Movie } from 'src/app/movie/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieDetailsService {
  constructor(
    protected movieDetailsStore: MovieDetailsStore,
    private http: HttpClient
  ) {}

  getMovieById(id: string): Observable<Movie> {
    return this.http
      .get<Movie>(`Movie/${id}`)
      .pipe(tap((movie) => this.movieDetailsStore.update(movie)));
  }
}
