import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';

@NgModule({
  imports: [AkitaNgRouterStoreModule, JwtModule],
})
export class CoreModule {}
