import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      relativeLinkResolution: 'corrected',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
