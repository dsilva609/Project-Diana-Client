import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITEM_TYPES } from 'src/app/shared/item/item.model';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';
import { WishFormComponent } from 'src/app/wish/wish-form/wish-form.component';

@UntilDestroy()
@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishComponent implements OnInit, AfterViewInit {
  itemTypes = ITEM_TYPES;
  wish: Observable<Wish>;
  wishID: number;
  wishUpdateForm: FormGroup;

  @ViewChild('wishForm') wishForm: WishFormComponent;

  constructor(
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private toastrService: ToastrService,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.wishID = Number(this.route.snapshot.paramMap.get('id'));

    this.wishService
      .getWishByID(this.wishID)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.wish = this.wishQuery
      .select((wish) => wish)
      .pipe(untilDestroyed(this));

    this.wishUpdateForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.wishUpdateForm.addControl('wishData', this.wishForm.wishForm);

    this.wish
      .pipe(
        map((wish) =>
          this.wishForm.wishForm.patchValue({
            apiID: wish.apiID,
            category: wish.category,
            imageUrl: wish.imageUrl,
            itemType: wish.itemType,
            notes: wish.notes,
            owned: wish.owned,
            title: wish.title,
            wishID: 0,
          })
        ),
        untilDestroyed(this)
      )
      .subscribe();

    this.changeDetector.detectChanges();
  }

  onSubmit(wishFormData): void {
    wishFormData.wishData.wishID = this.wishID;

    this.wishService
      .updateWish(wishFormData.wishData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/wish');

            this.toastrService.success('Wish updated');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
