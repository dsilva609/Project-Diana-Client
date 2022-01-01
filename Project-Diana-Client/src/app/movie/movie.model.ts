export interface Movie {
  id: string;
  imageUrl: string;
  title: string;
}

export function createMovie(): Movie {
  return {
    id: '',
    imageUrl: '',
    title: '',
  };
}
