import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AlbumSearchedComponent } from 'src/app/album/album-submission/album-searched/album-searched.component';
import { AlbumSubmissionComponent } from 'src/app/album/album-submission/album-submission.component';
import { AlbumComponent } from 'src/app/album/album.component';
import { AlbumDetailsComponent } from 'src/app/album/details/album-details.component';
import { AlbumSearchComponent } from 'src/app/album/search/album-search.component';
import { AlbumUpdateComponent } from 'src/app/album/update/album-update.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { BookListComponent } from 'src/app/book/book-list/book-list.component';
import { BookSubmissionComponent } from 'src/app/book/book-submission/book-submission.component';
import { BookComponent } from 'src/app/book/book.component';
import { BookDetailsComponent } from 'src/app/book/details/book-details.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { AuthenticatedDirective } from 'src/app/shared/helpers/authenticated.directive';
import { CanEditDirective } from 'src/app/shared/helpers/can-edit.directive';
import { NgxSubscribeDirective } from 'src/app/shared/helpers/ngx-directive';
import { HttpRequestInterceptor } from 'src/app/shared/http/http-request.interceptor';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { NoDatePipe } from 'src/app/shared/pipes/no-date-pipe';
import { YesNoPipe } from 'src/app/shared/pipes/yes-no.pipe';
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
    //--TODO: organize these into modules for each feature
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
    BookComponent,
    BookListComponent,
    AlbumDetailsComponent,
    BookDetailsComponent,
    YesNoPipe,
    CanEditDirective,
    AlbumSubmissionComponent,
    AlbumFormComponent,
    AuthenticatedDirective,
    NoDatePipe,
    AlbumUpdateComponent,
    AlbumSearchComponent,
    AlbumSearchedComponent,
    BookFormComponent,
    BookSubmissionComponent,
  ],

  imports: [
    //--TODO: organize these into separate module for third party
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
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DatePipe,
  ],
  bootstrap: [NavComponent, AppComponent, FooterComponent],
})
export class AppModule {}
