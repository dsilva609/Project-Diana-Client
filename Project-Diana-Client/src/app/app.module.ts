import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';
import { WishOwnedComponent } from 'src/app/wish/wish-list/wish-owned/wish-owned.component';
import { WishComponent } from 'src/app/wish/wish.component';
import { environment } from 'src/environments/environment';
import { HttpRequestInterceptor } from 'src/shared/http/http-request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    WishListComponent,
    NavComponent,
    WishOwnedComponent,
    WishComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    HttpClientModule,
    IconsModule,
    JwtModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}