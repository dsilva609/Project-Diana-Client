import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUserApiUrl: string;

  constructor(private http: HttpClient) {
    this.baseUserApiUrl = `${environment.apiBaseUrl}/api/user`;
  }

  login(loginRequest) {
    this.http
      .post<string>(`${this.baseUserApiUrl}/login`, loginRequest)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
