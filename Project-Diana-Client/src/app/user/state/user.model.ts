export interface User {
  displayName: string;
  id: number | string;
  token: string;
  userNum: number;
}

export function createUser(): User {
  return {
    displayName: '',
    id: '',
    token: '',
    userNum: 0,
  } as User;
}

export interface LoginResponse {
  displayName: string;
  token: string;
  userId: string;
  userNum: number;
}
