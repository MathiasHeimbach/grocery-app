import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  responseText = '';
  alertClass = '';

  userModel = new User();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmitHandler() {
    console.log(this.userModel);
    this.authService.register(this.userModel).subscribe(
      (response) => {
        this.responseText = response.message
        this.alertClass = 'alert-success';
      },
      (error) => {
        this.responseText = error.message
        this.alertClass = 'alert-danger';
      }
    );
  }
}
