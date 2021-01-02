import { Component, OnInit } from '@angular/core';
import  {apiService} from '../sercive/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });
  onSubmit() {
    console.warn(this.user.value.username);
    console.warn(this.user.value.password);
    console.warn(this.user.value.email);
    let service = new apiService()
    service.signup(this.user.value.username, this.user.value.password,this.user.value.email)
    .then((user)=>{
      alert(user.message)
      this.router.navigate(['/login'])
    })
    
  }
}
