import { Checkout } from 'src/app/checkout/checkout.model';
import { ItemStorage } from 'src/app/item-storage/item-storage.model';

export interface Album {
  id: number;
  artist: string;
  category: string;
  checkout: Checkout;
  completionStatus: number;
  countryOfOrigin: string;
  countryPurchased: string;
  dateAdded: string;
  datePurchased: string;
  dateUpdated: string;
  discogsId: number;
  genre: string;
  hasDigitalDownload: boolean;
  imageUrl: string;
  isNew: boolean;
  isPhysical: boolean;
  isReissue: boolean;
  isShowcased: boolean;
  itemStorage: ItemStorage;
  lastCompleted: string;
  locationPurchased: string;
  mediaType: number;
  notes: string;
  recordLabel: string;
  reissueYear: number;
  size: number;
  speed: number;
  style: string;
  timesCompleted: number;
  title: string;
  userId: string;
  yearReleased: number;
}

export function createAlbum(): Album {
  return {
    id: 0,
    artist: '',
    category: '',
    completionStatus: 0,
    countryOfOrigin: '',
    countryPurchased: '',
    dateAdded: '',
    datePurchased: '',
    dateUpdated: '',
    discogsId: 0,
    genre: '',
    hasDigitalDownload: false,
    imageUrl: '',
    isNew: false,
    isPhysical: false,
    isReissue: false,
    isShowcased: false,
    itemStorage: null,
    lastCompleted: '',
    locationPurchased: '',
    mediaType: 0,
    notes: '',
    recordLabel: '',
    reissueYear: 0,
    size: 0,
    speed: 0,
    style: '',
    timesCompleted: 0,
    title: '',
    userId: '',
    yearReleased: 0,
  } as Album;
}

export const MEDIA_TYPES = [
  { name: 'Vinyl', value: 0 },
  { name: 'CD', value: 1 },
];

export function getMediaTypeDisplayName(value: number): string {
  return MEDIA_TYPES.find((x) => x.value === value)?.name;
}

export const VINYL_SPEEDS = [
  { name: '33 1/3 RPM', value: 0 },
  { name: '45 RPM', value: 1 },
  { name: '78 RPM', value: 2 },
];

export function getVinylSpeedDisplayName(value: number): string {
  return VINYL_SPEEDS.find((x) => x.value === value)?.name;
}

export const VINYL_SIZES = [
  { name: '12"', value: 0 },
  { name: '7"', value: 1 },
  { name: '10"', value: 2 },
  { name: 'Other', value: 3 },
];

export function getVinylSizeDisplayName(value: number): string {
  return VINYL_SIZES.find((x) => x.value === value)?.name;
}
