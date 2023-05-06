import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  responseText = '';
  alertClass = '';

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
        this.responseText = response.message;
        this.alertClass = 'alert-success';
      },
      (error) => {
        console.log(error)
        this.responseText = error.error.message;
        this.alertClass = 'alert-danger';
      }
    )

  }
}
