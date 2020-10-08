import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  bookCount = 24;
  page = 0;
  totalBooks = 0;

  constructor(
    private bookListQuery: BookListQuery,
    private bookListService: BookListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.queryParams.pageNum ?? 0;

    this.getBooks(this.page);
  }

  getNextPage(pageNumber: number): void {
    this.getBooks(pageNumber);
  }

  private getBooks(page: number): void {
    this.bookListService
      .getBookList(this.bookCount, page)
      .pipe(tap((count) => (this.totalBooks = count)))
      .subscribe();

    this.books = this.bookListQuery.selectAll();

    this.router.navigate(['book'], { queryParams: { pageNum: page } });
  }
}
