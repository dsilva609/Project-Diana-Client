import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { WishListService } from 'src/app/wish/wish-list/state/wish-list.service';

@UntilDestroy()
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
    private toastrService: ToastrService,
    private wishListService: WishListService
  ) {}

  ngOnInit(): void {}

  completeWish(id: number): void {
    this.isVisible = false;
    this.isOwned = true;

    this.wishListService
      .completeWish(id)
      .pipe(
        tap(() => this.toastrService.success('Wish granted')),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
