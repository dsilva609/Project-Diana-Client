export interface GameSearchResult {
  id: string;
  developer: string;
  gameCategory: number;
  genre: string;
  imageUrl: string;
  publisher: string;
  title: string;
  yearReleasedOn: number;
}

export function createGameSearchResult(): GameSearchResult {
  return {
    id: '',
    developer: '',
    gameCategory: 0,
    genre: '',
    imageUrl: '',
    publisher: '',
    title: '',
    yearReleasedOn: 0,
  } as GameSearchResult;
}
