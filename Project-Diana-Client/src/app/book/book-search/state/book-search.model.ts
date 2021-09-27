export interface BookSearchResult {
  id: string;
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
  yearReleasedOn: number;
}

export function createBookSearchResult(): BookSearchResult {
  return {
    id: '',
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
    yearReleasedOn: 0,
  } as BookSearchResult;
}
