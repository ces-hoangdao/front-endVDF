import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import  {apiService} from '../sercive/api.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private router: Router) { }
  

  ngOnInit(): void {
  }
  
  user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.user.value.username);
    console.warn(this.user.value.password);
    let service = new apiService()
    service.login(this.user.value.username, this.user.value.password)
    .then(()=>{
      
      window.location.replace('/home')
      //this.router.navigate(['/home'])
    },
    (error) => {
     alert('LOGIN FAILED');
   }
    )
    
  }
  
}

