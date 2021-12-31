export interface Game {
  id: string;
  imageUrl: string;
  title: string;
}

export function createGame(): Game {
  return {
    id: '',
    imageUrl: '',
    title: '',
  };
}
