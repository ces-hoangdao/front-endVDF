import { Component, OnInit } from '@angular/core';
import { ListCampaignComponent } from '../list-campaign/list-campaign.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  search = new FormGroup({
    
  });
}
