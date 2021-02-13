import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WishFormComponent } from 'src/app/wish/wish-form/wish-form.component';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';
import { WishOwnedComponent } from 'src/app/wish/wish-list/wish-owned/wish-owned.component';
import { WishSubmissionComponent } from 'src/app/wish/wish-submission/wish-submission.component';
import { WishComponent } from 'src/app/wish/wish.component';
import { WISH_ROUTES } from 'src/app/wish/wish.routes';

@NgModule({
  declarations: [
    WishComponent,
    WishFormComponent,
    WishListComponent,
    WishOwnedComponent,
    WishSubmissionComponent,
  ],
  imports: [RouterModule.forChild(WISH_ROUTES), SharedModule],
})
export class WishModule {}
