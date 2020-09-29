import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Book } from 'src/app/book/state/book.model';
import { BookQuery } from 'src/app/book/state/book.query';
import { BookService } from 'src/app/book/state/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books = of<Book[]>();

  private bookCount = 10;
  constructor(private bookQuery: BookQuery, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBookList(this.bookCount).subscribe();
    this.books = this.bookQuery.selectAll();
  }
}
