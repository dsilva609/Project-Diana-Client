export interface Album {
  id: number;
  artist: string;
  category: string;
  countryOfOrigin: string;
  countryPurchased: string;
  dateAdded: string;
  datePurchased: string;
  dateUpdated: string;
  genre: string;
  imageUrl: string;
  isNew: boolean;
  isPhysical: boolean;
  isShowcased: boolean;
  lastCompleted: string;
  locationPurchased: string;
  mediaType: string;
  notes: string;
  recordLabel: string;
  size: string;
  speed: string;
  style: string;
  timesCompleted: number;
  title: string;
  userID: string;
  yearReleased: number;
}

export function createAlbum(): Album {
  return {
    id: 0,
    artist: '',
    category: '',
    countryOfOrigin: '',
    countryPurchased: '',
    dateAdded: '',
    datePurchased: '',
    dateUpdated: '',
    genre: '',
    imageUrl: '',
    isNew: false,
    isPhysical: false,
    isShowcased: false,
    lastCompleted: '',
    locationPurchased: '',
    mediaType: '',
    notes: '',
    recordLabel: '',
    size: '',
    speed: '',
    style: '',
    timesCompleted: 0,
    title: '',
    userID: '',
    yearReleased: 0,
  } as Album;
}

export const MEDIA_TYPES = [
  { name: 'Vinyl', value: 0 },
  { name: 'CD', value: 1 },
];

export const VINYL_SPEEDS = [
  { name: '33 1/3 RPM', value: 0 },
  { name: '45 RPM', value: 1 },
  { name: '78 RPM', value: 2 },
];

export const VINYL_SIZES = [
  { name: '12"', value: 0 },
  { name: '7"', value: 1 },
  { name: '10"', value: 2 },
  { name: 'Other', value: 3 },
];
