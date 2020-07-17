export interface Wish {
  id: number | string;
  title: string;
}

export function createWish(params: Partial<Wish>): Wish {
  return {
    id: '',
    title: '',
  } as Wish;
}
