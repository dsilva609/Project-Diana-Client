export interface AlbumSearchResult {
  id: number;
  artist: string;
  country: string;
  cover_image: string;
  format: string;
  genre: string;
  label: string;
  style: string;
  thumb: string;
  title: string;
  year: number;
}

export function createAlbumSearchResult(): AlbumSearchResult {
  return {
    id: 0,
    artist: '',
    country: '',
    cover_image: '',
    format: '',
    genre: '',
    label: '',
    style: '',
    thumb: '',
    title: '',
    year: 0,
  } as AlbumSearchResult;
}
