import { APP_ROUTES } from 'src/app/app.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { USER_ROUTES } from 'src/app/user/user.routes';
import { WISH_ROUTES } from 'src/app/wish/wish.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    RouterModule.forRoot(USER_ROUTES),
    RouterModule.forRoot(WISH_ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
