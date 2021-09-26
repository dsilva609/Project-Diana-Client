export interface User {
  displayName: string;
  id: string;
  refreshToken: string;
  token: string;
}

export function createUser(): User {
  return {
    displayName: '',
    id: '',
    refreshToken: '',
    token: '',
  } as User;
}

export interface LoginResponse {
  displayName: string;
  refreshToken: string;
  token: string;
  userId: string;
}
