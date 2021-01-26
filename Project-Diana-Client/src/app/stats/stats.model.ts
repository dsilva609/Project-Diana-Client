export interface Stat {
  albumStats: AlbumStats;
  bookStats: BookStats;
  completedCount: number;
  inProgressCount: number;
  notCompletedCount: number;
  totalCount: number;
}

export function createStat(): Stat {
  return {
    albumStats: null,
    bookStats: null,
  } as Stat;
}

export interface AlbumStats {
  albumCount: number;
  cdCount: number;
  completedAlbums: number;
  inProgressAlbums: number;
  notCompletedAlbums: number;
  rpm33RecordCount: number;
  rpm45RecordCount: number;
  rpm78RecordCount: number;
  sevenInchRecordCount: number;
  tenInchRecordCount: number;
  twelveInchRecordCount: number;
  vinylCount: number;
}

export interface BookStats {
  bookCount: number;
  comicCount: number;
  completedBookCount: number;
  inProgressBookCount: number;
  mangaCount: number;
  notStartedBookCount: number;
  novelCount: number;
}
