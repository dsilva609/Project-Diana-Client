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
import { ClickOutsideModule } from 'ng-click-outside';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AlbumComponent } from 'src/app/album/album.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NgxSubscribeDirective } from 'src/app/shared/helpers/ngx-directive';
import { HttpRequestInterceptor } from 'src/app/shared/http/http-request.interceptor';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { ShowcaseListComponent } from 'src/app/showcase/showcase-list/showcase-list.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { WishFormComponent } from 'src/app/wish/wish-form/wish-form.component';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';
import { WishOwnedComponent } from 'src/app/wish/wish-list/wish-owned/wish-owned.component';
import { WishSubmissionComponent } from 'src/app/wish/wish-submission/wish-submission.component';
import { WishComponent } from 'src/app/wish/wish.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NgxSubscribeDirective,
    WishListComponent,
    NavComponent,
    WishOwnedComponent,
    WishComponent,
    WishFormComponent,
    WishSubmissionComponent,
    AlbumComponent,
    AlbumListComponent,
    FooterComponent,
    ShowcaseListComponent,
  ],

  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    FontAwesomeModule,
    HttpClientModule,
    IconsModule,
    JwtModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [NavComponent, AppComponent, FooterComponent],
})
export class AppModule {}
