export interface Book {
  id: number;
  author: string;
  imageUrl: string;
  title: string;
  yearReleased: number;
}

export function createBook(): Book {
  return {
    id: 0,
    author: '',
    imageUrl: '',
    title: '',
    yearReleased: 0,
  } as Book;
}
