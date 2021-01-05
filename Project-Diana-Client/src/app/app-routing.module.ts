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
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(ALBUM_ROUTES, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(BOOK_ROUTES, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(SHOWCASE_ROUTES, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(USER_ROUTES, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(WISH_ROUTES, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
