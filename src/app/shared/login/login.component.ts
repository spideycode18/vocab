import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isLogin: boolean = false;
  constructor(private authService: AuthService) {
    authService.user$.subscribe(
      user => this.isLogin = Boolean(user)
    )
  }  

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
