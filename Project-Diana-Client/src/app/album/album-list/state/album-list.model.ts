import { Album } from 'src/app/album/album.model';

export interface AlbumListResponse {
  albums: Album[];
  totalCount: number;
}
