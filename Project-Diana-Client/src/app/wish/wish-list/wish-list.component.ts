import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { WishService } from 'src/app/wish/state/wish.service';
import { WishList } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListQuery } from 'src/app/wish/wish-list/state/wish-list.query';
import { WishListService } from 'src/app/wish/wish-list/state/wish-list.service';

@UntilDestroy()
@Component({
  selector: 'app-wish',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  tableColumns: string[] = ['title', 'owned', 'date-added'];
  albumWishes: WishList[];
  bookWishes: WishList[];
  gameWishes: WishList[];
  movieWishes: WishList[];

  selectedWishIdToDelete = 0;

  @ViewChild('confirmDeleteModal') confirmDeleteModal;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private toastService: ToastrService,
    private wishListQuery: WishListQuery,
    private wishListSerice: WishListService,
    private wishService: WishService,
    private wishListService: WishListService
  ) {}

  ngOnInit(): void {
    this.wishListSerice.getWishList().pipe(untilDestroyed(this)).subscribe();

    this.wishListQuery
      .select()
      .pipe(
        tap((result) => {
          this.albumWishes = result.albumWishes;
          this.bookWishes = result.bookWishes;
          this.gameWishes = result.gameWishes;
          this.movieWishes = result.movieWishes;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  searchForWish(id: number, url: string, wishTitle: string): void {
    this.wishService.setActiveWish(id);

    this.router.navigate([url], { queryParams: { title: wishTitle } });
  }

  viewWish(wishId: number): void {
    this.router.navigate([`wish/${wishId}`]);
  }

  openConfirmDeleteModal(event, wishId: number) {
    event.stopPropagation();

    this.selectedWishIdToDelete = wishId;

    this.modalService.open(this.confirmDeleteModal);
  }

  cancelDelete() {
    this.selectedWishIdToDelete = 0;

    this.modalService.dismissAll();
  }

  deleteWish() {
    this.wishListService
      .deleteWishById(this.selectedWishIdToDelete)
      .pipe(
        tap((success) => {
          this.selectedWishIdToDelete = 0;

          this.modalService.dismissAll();

          if (success) {
            window.location.reload();
          } else {
            this.toastService.error('Unable to delete wish');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
