export interface Album {
  id: number;
  artist: string;
  imageUrl: string;
  title: string;
  yearReleased: number;
}

export function createAlbum(): Album {
  return {
    id: 0,
    artist: '',
    imageUrl: '',
    title: '',
    yearReleased: 0,
  } as Album;
}
