import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { BookListQuery } from 'src/app/book/book-list/state/book-list.query';
import { BookListService } from 'src/app/book/book-list/state/book-list.service';
import { Book } from 'src/app/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books = of<Book[]>();

  private bookCount = 10;
  constructor(
    private bookListQuery: BookListQuery,
    private bookListService: BookListService
  ) {}

  ngOnInit(): void {
    this.bookListService.getBookList(this.bookCount).subscribe();
    this.books = this.bookListQuery.selectAll();
  }
}
