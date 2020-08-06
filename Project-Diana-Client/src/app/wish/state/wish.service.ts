import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishStore } from 'src/app/wish/state/wish.store';

@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(protected wishStore: WishStore, private http: HttpClient) {}

  getWishByID(wishID: string): void {
    this.http.get<Wish>(`Wish/GetWish/?id=${wishID}`).subscribe((wish) => {
      this.wishStore.update(wish);
    });
  }

  submitWish(wishFormData): Observable<boolean> {
    return this.http
      .post<boolean>('Wish/CreateWish', wishFormData)
      .pipe((createResult) => {
        return createResult;
      });
  }

  updateWish(wishFormData): Observable<boolean> {
    return this.http
      .post<boolean>('Wish/UpdateWish', wishFormData)
      .pipe((updateResult) => {
        if (updateResult) {
          this.wishStore.update(wishFormData);
        }

        return updateResult;
      });
  }
}
