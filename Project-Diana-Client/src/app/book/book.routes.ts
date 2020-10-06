import { Routes } from '@angular/router';
import { BookListComponent } from 'src/app/book/book-list/book-list.component';
import { BookDetailsComponent } from 'src/app/book/details/book-details.component';

export const BOOK_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full',
  },
  {
    path: 'book',
    component: BookListComponent,
  },
  { path: 'book/:id', component: BookDetailsComponent },
];
