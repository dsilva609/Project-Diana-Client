export interface Book {
  id: number;
  author: string;
  imageUrl: string;
  title: string;
}

export function createBook(): Book {
  return {
    id: 0,
    author: '',
    imageUrl: '',
    title: '',
  } as Book;
}
