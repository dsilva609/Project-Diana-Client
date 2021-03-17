export interface AlbumSearchResult {
  id: number;
  artist: string;
  countryOfOrigin: string;
  coverImage: string;
  format: string;
  genre: string;
  recordLabel: string;
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
    recordLabel: '',
    style: '',
    thumbnail: '',
    title: '',
    yearReleased: 0,
  } as AlbumSearchResult;
}
