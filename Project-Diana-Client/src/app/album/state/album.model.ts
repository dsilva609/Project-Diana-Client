export interface Album {
  id: number;
  artist: string;
}

export function createAlbum(params: Partial<Album>): Album {
  return {
    id: 0,
    artist: '',
  } as Album;
}
