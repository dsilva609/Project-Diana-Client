import { Checkout } from 'src/app/checkout/checkout.model';
import { ItemStorage } from 'src/app/item-storage/item-storage.model';

export interface Movie {
  id: string;
  addedOn: string;
  category: string;
  checkout: Checkout;
  completionStatus: number;
  countryOfOrigin: string;
  countryPurchased: string;
  director: string;
  distributor: string;
  genre: string;
  imageUrl: string;
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
  purchasedOn: string;
  rating: number;
  reissueYear: number;
  seasonNumber: number;
  timesCompleted: number;
  tmdbId: number;
  title: string;
  type: number;
  updatedOn: string;
  userId: string;
  yearReleasedOn: number;
}

export function createMovie(): Movie {
  return {
    id: '',
    addedOn: '',
    category: '',
    checkout: null,
    completionStatus: 0,
    countryOfOrigin: '',
    countryPurchased: '',
    director: '',
    distributor: '',
    genre: '',
    imageUrl: '',
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
    purchasedOn: '',
    rating: 0,
    reissueYear: 0,
    seasonNumber: 0,
    timesCompleted: 0,
    tmdbId: 0,
    title: '',
    type: 0,
    updatedOn: '',
    userId: '',
    yearReleasedOn: 0,
  };
}

export const MOVIE_CATEGORY_TYPES = [
  { name: 'Movie', value: 1 },
  { name: 'TV Show', value: 2 },
];

export const MOVIE_MEDIA_TYPES = [
  { name: 'Blu Ray', value: 1 },
  { name: 'DVD', value: 0 },
];

export const MOVIE_RATINGS = [
  { name: 'G', value: 0 },
  { name: 'PG', value: 1 },
  { name: 'PG-13', value: 2 },
  { name: 'R', value: 3 },
  { name: 'NR', value: 4 },
];

export function getMovieMediaTypeDisplayName(value: number): string {
  return MOVIE_MEDIA_TYPES.find((x) => x.value === value).name;
}

export function getMovieRatingDisplayName(value: number): string {
  return MOVIE_RATINGS.find((x) => x.value === value).name;
}
