import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/movie/movie-details/movie-details.component';
import { MovieFormComponent } from 'src/app/movie/movie-form/movie-form.component';
import { MovieListComponent } from 'src/app/movie/movie-list/movie-list.component';
import { MovieSearchComponent } from 'src/app/movie/movie-search/movie-search.component';
import { MOVIE_ROUTES } from 'src/app/movie/movie.routes';
import { MovieSearchedComponent } from 'src/app/movie/submission/movie-searched/movie-searched.component';
import { MovieSubmissionComponent } from 'src/app/movie/submission/movie-submission.component';
import { MovieUpdateComponent } from 'src/app/movie/update/movie-update/movie-update.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MovieFormComponent,
    MovieSubmissionComponent,
    MovieUpdateComponent,
    MovieSearchComponent,
    MovieSearchedComponent,
  ],
  imports: [RouterModule.forChild(MOVIE_ROUTES), SharedModule],
})
export class MovieModule {}
