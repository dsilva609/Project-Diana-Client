import { Album } from 'src/app/album/state/album.model';

export interface ShowcaseListResponse {
  showcasedAlbums: Album[];
}

export function createShowcaseList(): ShowcaseListResponse {
  return {
    showcasedAlbums: [],
  } as ShowcaseListResponse;
}
