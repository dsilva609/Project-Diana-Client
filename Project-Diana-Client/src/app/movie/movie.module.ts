import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from 'src/app/movie/movie-list/movie-list.component';
import { MOVIE_ROUTES } from 'src/app/movie/movie.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [RouterModule.forChild(MOVIE_ROUTES), SharedModule],
})
export class MovieModule {}
