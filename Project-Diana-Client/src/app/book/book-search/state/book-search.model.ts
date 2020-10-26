export interface BookSearchResult {
  author: string;
  countryOfOrigin: string;
  genre: string;
  googleBookId: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  publisher: string;
  title: string;
  yearReleased: number;
}

export function createBookSearchResult(): BookSearchResult {
  return {
    author: '',
    countryOfOrigin: '',
    genre: '',
    googleBookId: '',
    imageUrl: '',
    isbn10: '',
    isbn13: '',
    language: '',
    pageCount: 0,
    publisher: '',
    title: '',
    yearReleased: 0,
  } as BookSearchResult;
}
