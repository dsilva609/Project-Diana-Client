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
