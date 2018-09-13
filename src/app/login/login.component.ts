import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login () {
    console.log('login');
    this.sharedService.isConnected = true;
    this.router.navigate(['/home']);
  }

}
