import { AlbumListResponse } from 'src/app/album/album-list/state/album-list.model';
import { BookListResponse } from 'src/app/book/book-list/state/book-list.model';
import { GameListResponse } from 'src/app/game/game-list/state/game-list.model';
import { MovieListResponse } from 'src/app/movie/movie-list/state/movie-list.model';

export interface Home {
  latestAlbums: AlbumListResponse;
  latestBooks: BookListResponse;
  latestGames: GameListResponse;
  latestMovies: MovieListResponse;
}
