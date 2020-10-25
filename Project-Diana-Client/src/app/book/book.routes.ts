import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { BookListComponent } from 'src/app/book/book-list/book-list.component';
import { BookSubmissionComponent } from 'src/app/book/book-submission/book-submission.component';
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
  {
    path: 'book/create',
    component: BookSubmissionComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'book/:id', component: BookDetailsComponent },
];
