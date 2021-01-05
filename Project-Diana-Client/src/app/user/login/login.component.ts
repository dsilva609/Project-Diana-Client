import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/user/state/user.service';

@UntilDestroy()
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
    private toastrService: ToastrService,
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
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigate(['']);

            this.toastrService.info('Welcome!');
          } else {
            this.toastrService.error('Error logging in');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
