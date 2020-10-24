export interface AlbumSearchResult {
  id: number;
  artist: string;
  countryOfOrigin: string;
  coverImage: string;
  format: string;
  genre: string;
  label: string;
  style: string;
  thumbnail: string;
  title: string;
  yearReleased: number;
}

export function createAlbumSearchResult(): AlbumSearchResult {
  return {
    id: 0,
    artist: '',
    countryOfOrigin: '',
    coverImage: '',
    format: '',
    genre: '',
    label: '',
    style: '',
    thumbnail: '',
    title: '',
    yearReleased: 0,
  } as AlbumSearchResult;
}
