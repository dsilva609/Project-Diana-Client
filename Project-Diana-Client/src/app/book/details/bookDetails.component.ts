import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Book } from 'src/app/book/book.model';
import { BookQuery } from 'src/app/book/details/state/book.query';
import { BookService } from 'src/app/book/details/state/book.service';

@Component({
  selector: 'app-details',
  templateUrl: './bookDetails.component.html',
  styleUrls: ['./bookDetails.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book = of<Book>();

  constructor(
    private bookQuery: BookQuery,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(id).subscribe();

    this.book = this.bookQuery.select();
  }
}
