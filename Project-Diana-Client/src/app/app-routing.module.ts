import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ALBUM_ROUTES } from 'src/app/album/album.routes';
import { APP_ROUTES } from 'src/app/app.routes';
import { BOOK_ROUTES } from 'src/app/book/book.routes';
import { SHOWCASE_ROUTES } from 'src/app/showcase/showcase.routes';
import { USER_ROUTES } from 'src/app/user/user.routes';
import { WISH_ROUTES } from 'src/app/wish/wish.routes';


@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    RouterModule.forRoot(ALBUM_ROUTES),
    RouterModule.forRoot(BOOK_ROUTES),
    RouterModule.forRoot(SHOWCASE_ROUTES),
    RouterModule.forRoot(USER_ROUTES),
    RouterModule.forRoot(WISH_ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
