import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUserApiUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUserApiUrl = `${environment.apiBaseUrl}/api/user`;
  }

  login(loginRequest): void {
    this.http
      .post<string>(`${this.baseUserApiUrl}/login`, loginRequest)
      .subscribe((result) => {
        localStorage.setItem('token', result);

        this.router.navigate(['']);
      });
  }

  logout(): void {
    localStorage.removeItem('token');

    this.router.navigate(['']);
  }
}
