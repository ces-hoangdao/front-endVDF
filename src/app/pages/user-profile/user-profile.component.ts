import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: any = {};

  constructor(private apiService: ApiService) { 
  }

  ngOnInit() {
    this.apiService.getProfile().subscribe(result => {
      this.profile = result;
    })
  }

  onProfileUpdate() {
    console.log(this.profile);
  }
}
