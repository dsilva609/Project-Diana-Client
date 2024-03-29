import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { MovieDetailsComponent } from 'src/app/movie/movie-details/movie-details.component';
import { MovieListComponent } from 'src/app/movie/movie-list/movie-list.component';
import { MovieSearchComponent } from 'src/app/movie/movie-search/movie-search.component';
import { MovieSearchedComponent } from 'src/app/movie/submission/movie-searched/movie-searched.component';
import { MovieSubmissionComponent } from 'src/app/movie/submission/movie-submission.component';
import { MovieUpdateComponent } from 'src/app/movie/update/movie-update/movie-update.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { title: 'Movies' },
  },
  {
    path: 'addFromSearch/:id',
    component: MovieSearchedComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Movies' },
  },
  {
    path: 'create',
    component: MovieSubmissionComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Movies' },
  },
  {
    path: 'search',
    component: MovieSearchComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Movies' },
  },
  {
    path: 'update/:id',
    component: MovieUpdateComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Movies' },
  },
  {
    path: ':id',
    component: MovieDetailsComponent,
    data: { title: 'Movies' },
  },
];
