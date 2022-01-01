import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieStore } from 'src/app/movie/state/movie.store';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private movieStore: MovieStore, private http: HttpClient) {}
}
