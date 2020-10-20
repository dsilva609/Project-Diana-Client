export const ITEM_COMPLETION_STATUSES = [
  { name: 'Not Started', value: 0 },
  { name: 'In Progress', value: 1 },
  { name: 'Completed', value: 2 },
];

export const ITEM_TYPES = [
  { name: 'Album', value: 0 },
  { name: 'Book', value: 1 },
  { name: 'Game', value: 3 },
  { name: 'Movie', value: 2 },
];

export function getReleaseYears(): { value: number; selected: boolean }[] {
  const currentYear = new Date().getUTCFullYear();

  const years = [];

  for (let year = currentYear; year >= 1900; year--) {
    years.push({ value: year, selected: year === currentYear });
  }

  return years;
}
