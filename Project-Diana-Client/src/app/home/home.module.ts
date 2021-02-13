import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from 'src/app/home/home.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES), SharedModule],
})
export class HomeModule {}
