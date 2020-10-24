export interface AlbumSearchResult {
  id: number;
  country: string;
  format: string;
  thumb: string;
  title: string;
  year: number;
}

export function createAlbumSearchResult(): AlbumSearchResult {
  return {
    id: 0,
    country: '',
    format: '',
    thumb: '',
    title: '',
    year: 0,
  } as AlbumSearchResult;
}
