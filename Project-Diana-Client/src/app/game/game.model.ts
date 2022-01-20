import { Checkout } from 'src/app/checkout/checkout.model';
import { ItemStorage } from 'src/app/item-storage/item-storage.model';

export interface Game {
  id: string;
  addedOn: string;
  bggId: number;
  category: string;
  checkout: Checkout;
  completionStatus: number;
  countryOfOrigin: string;
  countryPurchased: string;
  developer: string;
  genre: string;
  giantBombId: number;
  imageUrl: string;
  isDLC: boolean;
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
  partOfSeries: boolean;
  platform: number;
  publisher: string;
  purchasedOn: string;
  rating: number;
  reissueYear: number;
  series: string;
  timesCompleted: number;
  title: string;
  type: number;
  updatedOn: string;
  userId: string;
  yearReleasedOn: number;
}

export function createGame(): Game {
  return {
    id: '',
    addedOn: '',
    bggId: 0,
    category: '',
    checkout: null,
    completionStatus: 0,
    countryOfOrigin: '',
    countryPurchased: '',
    developer: '',
    genre: '',
    giantBombId: 0,
    imageUrl: '',
    isDLC: false,
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
    partOfSeries: false,
    platform: 0,
    publisher: '',
    purchasedOn: '',
    rating: 0,
    reissueYear: 0,
    series: '',
    timesCompleted: 0,
    title: '',
    type: 0,
    updatedOn: '',
    userId: '',
    yearReleasedOn: 0,
  } as Game;
}

export const GAME_MEDIA_TYPES = [
  { name: 'DLC', value: 1 },
  { name: 'Expansion', value: 2 },
  { name: 'Full Game', value: 0 },
];

export const GAME_PLATFORMS = [
  { name: 'Board Game', value: 0 },
  { name: 'GameBoy', value: 13 },
  { name: 'GameBoy Advance', value: 14 },
  { name: 'GameCube', value: 10 },
  { name: 'Nintendo DS', value: 15 },
  { name: 'Nintendo Switch', value: 18 },
  { name: 'Nintendo 3DS', value: 16 },
  { name: 'Nintendo 64', value: 9 },
  { name: 'PC', value: 1 },
  { name: 'PlayStation', value: 2 },
  { name: 'PlayStation 2', value: 3 },
  { name: 'PlayStation 3', value: 4 },
  { name: 'PlayStation 4', value: 5 },
  { name: 'PlayStation 5', value: 21 },
  { name: 'PSP', value: 19 },
  { name: 'PS Vita', value: 17 },
  { name: 'Xbox', value: 6 },
  { name: 'Xbox 360', value: 7 },
  { name: 'Xbox One', value: 8 },
  { name: 'Xbox Series X/S', value: 20 },
  { name: 'Wii', value: 11 },
  { name: 'Wii U', value: 12 },
];

export const GAME_RATINGS = [
  { name: 'E', value: 1 },
  { name: 'EC', value: 0 },
  { name: 'E-10', value: 2 },
  { name: 'T', value: 3 },
  { name: 'M', value: 4 },
  { name: 'A', value: 5 },
];

export function getGameMediaTypeDisplayName(value: number): string {
  return GAME_MEDIA_TYPES.find((x) => x.value === value).name;
}

export function getGamePlatformDisplayName(value: number): string {
  return GAME_PLATFORMS.find((x) => x.value === value).name;
}

export function getGameRatingDisplayName(value: number): string {
  return GAME_RATINGS.find((x) => x.value === value).name;
}
