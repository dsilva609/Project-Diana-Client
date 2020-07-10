import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    return !jwtHelper.isTokenExpired(token);
  }
}
