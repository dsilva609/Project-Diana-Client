import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { BookListComponent } from 'src/app/book/book-list/book-list.component';
import { BookSearchComponent } from 'src/app/book/book-search/book-search.component';
import { BookSearchedComponent } from 'src/app/book/book-submission/book-searched/book-searched.component';
import { BookSubmissionComponent } from 'src/app/book/book-submission/book-submission.component';
import { BOOK_ROUTES } from 'src/app/book/book.routes';
import { BookDetailsComponent } from 'src/app/book/details/book-details.component';
import { BookUpdateComponent } from 'src/app/book/update/book-update.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BookFormComponent,
    BookListComponent,
    BookSearchComponent,
    BookSearchedComponent,
    BookSubmissionComponent,
    BookUpdateComponent,
  ],
  imports: [RouterModule.forChild(BOOK_ROUTES), SharedModule],
})
export class BookModule {}
