import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishStore } from 'src/app/wish/state/wish.store';

@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(protected wishStore: WishStore, private http: HttpClient) {}

  getWishById(wishId: number): Observable<Wish> {
    return this.http.get<Wish>(`Wish/GetWish?id=${wishId}`).pipe(
      tap((wish) => {
        this.wishStore.update(wish);

        return wish;
      })
    );
  }

  resetActiveWish(id: number): void {
    this.wishStore.setActive(null);
  }

  setActiveWish(id: number): void {
    this.wishStore.setActive(id);
  }

  submitWish(wishFormData): Observable<boolean> {
    return this.http.post<boolean>('Wish/CreateWish', wishFormData).pipe(
      tap((createResult) => {
        return createResult;
      })
    );
  }

  updateWish(wishFormData): Observable<boolean> {
    return this.http.post<boolean>('Wish/UpdateWish', wishFormData).pipe(
      tap((updateResult) => {
        if (updateResult) {
          this.wishStore.update(wishFormData);
        }

        return updateResult;
      })
    );
  }
}
