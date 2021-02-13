import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowcaseListComponent } from 'src/app/showcase/showcase-list/showcase-list.component';
import { SHOWCASE_ROUTES } from 'src/app/showcase/showcase.routes';

@NgModule({
  declarations: [ShowcaseListComponent],
  imports: [RouterModule.forChild(SHOWCASE_ROUTES), SharedModule],
})
export class ShowcaseModule {}
