import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  itemTypes: { name: string; value: number }[];
  wish: Wish;
  wishForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.itemTypes = this.getItemTypes();

    this.route.queryParams.subscribe((params) => {
      const wishID = this.route.snapshot.paramMap.get('id');

      this.wishService.getWishByID(wishID);
    });

    this.wishQuery.select().subscribe((wish) => {
      this.wish = wish;

      this.wishForm = this.formBuilder.group({
        apiID: this.wish.apiID,
        category: this.wish.category,
        imageUrl: this.wish.imageUrl,
        itemType: this.wish.itemType,
        notes: this.wish.notes,
        owned: this.wish.owned,
        title: this.wish.title,
        wishID: 0,
      });
    });
  }

  onSubmit(wishFormData): void {
    wishFormData.wishID = this.wish.id;

    this.wishService
      .updateWish(wishFormData)
      .pipe(take(1))
      .subscribe((successful) => {
        if (successful) {
          this.router.navigate(['/wish']);
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
