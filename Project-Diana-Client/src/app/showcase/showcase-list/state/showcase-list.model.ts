import { Album } from 'src/app/album/album.model';
import { Book } from 'src/app/book/book.model';
import { Game } from 'src/app/game/game.model';
import { Movie } from 'src/app/movie/movie.model';

export interface ShowcaseListResponse {
  showcasedAlbums: Album[];
  showcasedBooks: Book[];
  showcasedGames: Game[];
  showcasedMovies: Movie[];
}

export function createShowcaseList(): ShowcaseListResponse {
  return {
    showcasedAlbums: [],
    showcasedBooks: [],
    showcasedGames: [],
    showcasedMovies: [],
  } as ShowcaseListResponse;
}
