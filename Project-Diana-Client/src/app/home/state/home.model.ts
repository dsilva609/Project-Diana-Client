import { AlbumListResponse } from 'src/app/album/album-list/state/album-list.model';
import { BookListResponse } from 'src/app/book/book-list/state/book-list.model';

export interface Home {
  latestAlbums: AlbumListResponse;
  latestBooks: BookListResponse;
}
