export interface Album {
  id: number;
  artist: string;
  imageUrl: string;
  title: string;
}

export function createAlbum(): Album {
  return {
    id: 0,
    artist: '',
    imageUrl: '',
    title: '',
  } as Album;
}
