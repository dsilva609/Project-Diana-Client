import { Movie } from 'src/app/movie/movie.model';

export interface MovieListResponse {
  movies: Movie[];
  totalCount: number;
}
