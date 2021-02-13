import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AlbumComponent } from 'src/app/album/album.component';
import { BookComponent } from 'src/app/book/book.component';
import { AuthenticatedDirective } from 'src/app/shared/helpers/authenticated.directive';
import { CanEditDirective } from 'src/app/shared/helpers/can-edit.directive';
import { NgxSubscribeDirective } from 'src/app/shared/helpers/ngx-directive';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { NoDatePipe } from 'src/app/shared/pipes/no-date-pipe';
import { YesNoPipe } from 'src/app/shared/pipes/yes-no.pipe';

export const DIRECTIVES = [
  AuthenticatedDirective,
  CanEditDirective,
  NgxSubscribeDirective,
];
export const PIPES = [NoDatePipe, YesNoPipe];

export const ALBUM_COMPONENTS = [AlbumComponent];
export const BOOK_COMPONENTS = [BookComponent];

const HTTP_MODULES = [HttpClientModule];
const NG_MODULES = [CommonModule, ReactiveFormsModule, RouterModule];
const THIRD_PARTY_MODULES = [FontAwesomeModule, ToastrModule.forRoot()];
const UI_MODULES = [ClickOutsideModule, IconsModule, NgxPaginationModule];

@NgModule({
  declarations: [DIRECTIVES, PIPES, ALBUM_COMPONENTS, BOOK_COMPONENTS],
  exports: [
    DIRECTIVES,
    PIPES,

    ALBUM_COMPONENTS,
    BOOK_COMPONENTS,

    HTTP_MODULES,
    NG_MODULES,
    THIRD_PARTY_MODULES,
    UI_MODULES,
  ],
  imports: [HTTP_MODULES, NG_MODULES, THIRD_PARTY_MODULES, UI_MODULES],
  bootstrap: [],
})
export class SharedModule {}
