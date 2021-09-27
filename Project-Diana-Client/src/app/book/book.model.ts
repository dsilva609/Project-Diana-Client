import { Checkout } from 'src/app/checkout/checkout.model';
import { ItemStorage } from 'src/app/item-storage/item-storage.model';

export interface Book {
  id: string;
  addedOn: string;
  author: string;
  category: string;
  checkout: Checkout;
  completionStatus: number;
  countryOfOrigin: string;
  countryPurchased: string;
  genre: string;
  hardcover: boolean;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  isFirstEdition: boolean;
  isNew: boolean;
  isPhysical: boolean;
  isReissue: boolean;
  isShowcased: boolean;
  itemStorage: ItemStorage;
  language: string;
  lastCompletedOn: string;
  locationPurchased: string;
  notes: string;
  pageCount: number;
  publisher: string;
  purchasedOn: string;
  reissueYear: number;
  timesCompleted: number;
  title: string;
  type: number;
  updatedOn: string;
  userId: string;
  yearReleasedOn: number;
}

export function createBook(): Book {
  return {
    id: '',
    addedOn: '',
    author: '',
    category: '',
    completionStatus: 0,
    countryOfOrigin: '',
    countryPurchased: '',
    genre: '',
    hardcover: false,
    imageUrl: '',
    isbn10: '',
    isbn13: '',
    isFirstEdition: false,
    isNew: false,
    isPhysical: false,
    isReissue: false,
    isShowcased: false,
    itemStorage: null,
    language: '',
    lastCompletedOn: '',
    locationPurchased: '',
    notes: '',
    pageCount: 0,
    publisher: '',
    purchasedOn: '',
    reissueYear: 0,
    timesCompleted: 0,
    title: '',
    type: 0,
    updatedOn: '',
    userId: '',
    yearReleasedOn: 0,
  } as Book;
}

export const BOOK_MEDIA_TYPES = [
  { name: 'Novel', value: 0 },
  { name: 'Comic', value: 1 },
  { name: 'Manga', value: 2 },
];

export function getBookMediaTypeDisplayName(value: number): string {
  return BOOK_MEDIA_TYPES.find((x) => x.value === value).name;
}
