import { Album } from 'src/app/album/album.model';
import { Book } from 'src/app/book/book.model';

export interface ShowcaseListResponse {
  showcasedAlbums: Album[];
  showcasedBooks: Book[];
}

export function createShowcaseList(): ShowcaseListResponse {
  return {
    showcasedAlbums: [],
    showcasedBooks: [],
  } as ShowcaseListResponse;
}
