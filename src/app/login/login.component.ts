import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = 'admin';
  userpwd = 'secret';
  error: String;
  title: String = 'Connexion';
  private user: User;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.user = new User();
  }

  login () {
    console.log('login');
    this.loginService.getUser(this.userlogin).subscribe((user) => {
      this.user = user;
      if (this.userpwd === this.user.userpwd) {
        this.sharedService.isConnected = true;
        this.router.navigate(['/home']);
      } else {
        this.error = 'Login ou mot de passe inconnu !';
      }
    }, (error) => {
      this.error = error.message;
    });
  }

}
