import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class IconsModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas, far);
  }
}
