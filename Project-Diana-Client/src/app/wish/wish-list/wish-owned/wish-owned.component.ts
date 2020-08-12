import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { WishListService } from 'src/app/wish/wish-list/state/wish-list.service';

@Component({
  selector: 'app-wish-owned',
  templateUrl: './wish-owned.component.html',
  styleUrls: ['./wish-owned.component.scss'],
})
export class WishOwnedComponent implements OnInit {
  @Input() isOwned = false;
  @Input() wishId = 0;

  isVisible = false;

  constructor(private wishListService: WishListService) {}

  ngOnInit(): void {}

  completeWish(id: number): void {
    this.isVisible = false;
    this.isOwned = true;

    this.wishListService.completeWish(id).pipe(take(1)).subscribe();
  }
}
