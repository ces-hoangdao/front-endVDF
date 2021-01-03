import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  campaign = new FormGroup({
    
  });
  onSubmit() {
    
  }
}
