export interface User {
  id: number | string;
  token: string;
}

export function createUser(): User {
  return {
    id: '',
    token: '',
  } as User;
}
