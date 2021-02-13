import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { HOME_ROUTES } from 'src/app/home/home.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(HOME_ROUTES), SharedModule],
})
export class HomeModule {}
