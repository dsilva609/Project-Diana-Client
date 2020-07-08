import { USER_ROUTES } from './user/user.routes';
import { APP_ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    RouterModule.forRoot(USER_ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
