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

export function getGameMediaTypeDisplayName(value: number): string {
  return GAME_MEDIA_TYPES.find((x) => x.value === value).name;
}
