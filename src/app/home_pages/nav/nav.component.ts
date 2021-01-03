import { Component, OnInit } from '@angular/core';
import  {apiService} from '../sercive/api.service';
import { FormGroup, FormControl } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  logout = new FormGroup({
  
  });
  currentUser = localStorage.getItem("username")
  
  onSubmit() {
    let service = new apiService()
    service.logout()
  };
  
  
}
