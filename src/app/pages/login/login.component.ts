import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import {NgForm} from '@angular/forms';

var output = console.log;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authService: AuthService) { }


  ngOnInit() {
    //reset login
    this.authService.logout();
    output("on init");
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
        .subscribe(result => {
            if (result.accessToken) {
                // login successful
                localStorage.setItem('user', this.model.username);
                localStorage.setItem('token', result.accessToken);
                this.router.navigate(['/admin']);
            } else {
                // login failed
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });

  }

}
