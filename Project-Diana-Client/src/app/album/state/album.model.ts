export interface Album {
  id: number;
  artist: string;
}

export function createAlbum(): Album {
  return {
    id: 0,
    artist: '',
  } as Album;
}
