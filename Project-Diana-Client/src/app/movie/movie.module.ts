import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/movie/movie-details/movie-details.component';
import { MovieListComponent } from 'src/app/movie/movie-list/movie-list.component';
import { MOVIE_ROUTES } from 'src/app/movie/movie.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent],
  imports: [RouterModule.forChild(MOVIE_ROUTES), SharedModule],
})
export class MovieModule {}
