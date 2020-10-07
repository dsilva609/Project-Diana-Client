import { Book } from 'src/app/book/book.model';

export interface BookListResponse {
  books: Book[];
  totalCount: number;
}
