import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  login(loginRequest): void {
    this.http.post<string>('User/Login', loginRequest).subscribe((result) => {
      localStorage.setItem('token', result);

      this.router.navigate(['']);
    });
  }

  logout(): void {
    localStorage.removeItem('token');

    this.router.navigate(['']);
  }
}
