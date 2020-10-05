import { Album } from 'src/app/album/album.model';

export interface ShowcaseListResponse {
  showcasedAlbums: Album[];
}

export function createShowcaseList(): ShowcaseListResponse {
  return {
    showcasedAlbums: [],
  } as ShowcaseListResponse;
}
