import { Routes } from '@angular/router';
import { MovieListComponent } from 'src/app/movie/movie-list/movie-list.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { title: 'Movies' },
  },
];
