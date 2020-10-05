import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book!: Book;

  constructor() {}

  ngOnInit(): void {}
}
