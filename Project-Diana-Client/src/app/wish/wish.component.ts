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
import { take } from 'rxjs/operators';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';
import { WishFormComponent } from 'src/app/wish/wish-form/wish-form.component';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishComponent implements OnInit, AfterViewInit {
  itemTypes: { name: string; value: number }[];
  wish: Wish;
  wishUpdateForm: FormGroup;

  @ViewChild('wishForm') wishForm: WishFormComponent;

  constructor(
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const wishID = this.route.snapshot.paramMap.get('id');

      this.wishService.getWishByID(wishID);
    });

    this.wishUpdateForm = new FormGroup({});

    //--not loading correctly
    this.wishQuery.select().subscribe((wish) => {
      this.wish = wish;
    });
  }

  ngAfterViewInit(): void {
    this.wishUpdateForm.addControl('wishData', this.wishForm.wishForm);

    this.wishForm.wishForm.patchValue({
      apiID: this.wish.apiID,
      category: this.wish.category,
      imageUrl: this.wish.imageUrl,
      itemType: this.wish.itemType,
      notes: this.wish.notes,
      owned: this.wish.owned,
      title: this.wish.title,
      wishID: 0,
    });

    this.changeDetector.detectChanges();
  }

  onSubmit(wishFormData): void {
    wishFormData.wishData.wishID = this.wish.id;

    this.wishService
      .updateWish(wishFormData.wishData)
      .pipe(take(1))
      .subscribe((successful) => {
        if (successful) {
          this.router.navigateByUrl('/wish');
        }
      });
  }

  getItemTypes(): { name: string; value: number }[] {
    return [
      { name: 'Album', value: 0 },
      { name: 'Book', value: 1 },
      { name: 'Game', value: 3 },
      { name: 'Movie', value: 2 },
    ];
  }
}
