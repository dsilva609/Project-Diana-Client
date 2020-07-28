import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { WishService } from 'src/app/wish/state/wish.service';

@Component({
  selector: 'app-wish-owned',
  templateUrl: './wish-owned.component.html',
  styleUrls: ['./wish-owned.component.scss'],
})
export class WishOwnedComponent implements OnInit {
  @Input() isOwned = false;
  @Input() wishId = 0;

  isVisible = false;

  constructor(
    private iconLibrary: FaIconLibrary,
    private wishService: WishService
  ) {
    iconLibrary.addIcons(faCheckCircle);
  }

  ngOnInit(): void {}

  completeWish(id: number): void {
    this.isVisible = false;
    this.isOwned = true;

    this.wishService.completeWish(id);
  }
}
