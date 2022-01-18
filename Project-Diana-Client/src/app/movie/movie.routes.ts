import { Routes } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/movie/movie-details/movie-details.component';
import { MovieListComponent } from 'src/app/movie/movie-list/movie-list.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { title: 'Movies' },
  },
  {
    path: ':id',
    component: MovieDetailsComponent,
    data: { title: 'Movies' },
  },
];
