import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/user/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { USER_ROUTES } from 'src/app/user/user.routes';

@NgModule({
  declarations: [LoginComponent, UserComponent],
  imports: [RouterModule.forChild(USER_ROUTES), SharedModule],
})
export class UserModule {}
