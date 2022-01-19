import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from 'src/app/movie/movie.model';
import { MovieStore } from 'src/app/movie/state/movie.store';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private movieStore: MovieStore, private http: HttpClient) {}

  addToShowcase(id: string): Observable<boolean> {
    return this.http.put(`Movie/AddToShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.movieStore.update({
          isShowcased: true,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http
      .get<Movie>(`Movie/${id}`)
      .pipe(tap((movie) => this.movieStore.update(movie)));
  }

  incrementPlayCount(id: string, playCount: number): Observable<boolean> {
    return this.http.put(`Movie/IncrementPlayCount/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.movieStore.update({
          lastCompletedOn: updatedTime,
          timesCompleted: playCount,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }

  removeFromShowcase(id: string): Observable<boolean> {
    return this.http.put(`Movie/RemoveFromShowcase/${id}`, null).pipe(
      map((response) => {
        const updatedTime = new Date().toUTCString();

        this.movieStore.update({
          isShowcased: false,
          updatedOn: updatedTime,
        });

        return true;
      })
    );
  }
}
