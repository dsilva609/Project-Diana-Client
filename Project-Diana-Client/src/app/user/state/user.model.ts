export interface User {
  displayName: string;
  id: number | string;
  refreshToken: string;
  token: string;
  userNum: number;
}

export function createUser(): User {
  return {
    displayName: '',
    id: '',
    refreshToken: '',
    token: '',
    userNum: 0,
  } as User;
}

export interface LoginResponse {
  displayName: string;
  refreshToken: string;
  token: string;
  userId: string;
  userNum: number;
}
