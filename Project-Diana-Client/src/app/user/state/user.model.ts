export interface User {
  displayName: string;
  id: number | string;
  token: string;
}

export function createUser(): User {
  return {
    displayName: '',
    id: '',
    token: '',
  } as User;
}

export interface LoginResponse {
  displayName: string;
  token: string;
  userId: string;
}
