import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/user/login/login.component';
import { SettingsComponent } from 'src/app/user/settings/settings.component';
import { UserComponent } from 'src/app/user/user.component';
import { USER_ROUTES } from 'src/app/user/user.routes';

@NgModule({
  declarations: [LoginComponent, UserComponent, SettingsComponent],
  imports: [RouterModule.forChild(USER_ROUTES), SharedModule],
})
export class UserModule {}
