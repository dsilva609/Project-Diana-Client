import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  incrementPlayCount(id: string, playCount: number): Observable<boolean> {
    return this.http.put(`Movie/IncrementPlayCount/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.movieDetailsStore.update({
          lastCompletedOn: updatedTime,
          timesCompleted: playCount,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }
}
