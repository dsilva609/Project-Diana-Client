import { Wish } from 'src/app/wish/state/wish.model';

export interface WishListResponse {
  albumWishes: WishList[];
  bookWishes: WishList[];
  gameWishes: WishList[];
  movieWishes: WishList[];
}

export interface WishList {
  category: string;
  wishes: Wish[];
}
