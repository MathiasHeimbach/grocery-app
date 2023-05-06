import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  responseText = '';
  alertClass = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmitHandler() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response)

        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user))

        this.responseText = 'login successful, thank you';
        this.alertClass = 'alert-success';
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error)
        this.responseText = error.error.message;
        this.alertClass = 'alert-danger';
      }
    )

  }
}
