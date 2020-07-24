import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/user/state/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  onSubmit(loginData): void {
    this.userService
      .login(loginData)
      .pipe(take(1))
      .subscribe((successful) => {
        if (successful) {
          this.router.navigate(['']);
        }
      });
  }
}