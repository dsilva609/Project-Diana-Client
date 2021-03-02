import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-indicator-small',
  templateUrl: './loading-indicator-small.component.html',
  styleUrls: ['./loading-indicator-small.component.scss'],
})
export class LoadingIndicatorSmallComponent {
  @Input() isLoading: boolean;

  constructor() {}
}
