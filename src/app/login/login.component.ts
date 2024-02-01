import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string="";
  password: string="";

  constructor(private loginService: LoginService) { }
  onSubmit(): void {
   this.loginService.login(this.email, this.password).subscribe(
      data => {
        console.log('JWT Token:', data.token);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
