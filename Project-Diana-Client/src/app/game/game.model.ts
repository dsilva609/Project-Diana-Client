export interface Game {
  id: string;
  title: string;
}

export function createGame(): Game {
  return {
    id: '',
    title: '',
  };
}
