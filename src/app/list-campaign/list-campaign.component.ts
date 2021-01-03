import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.css']
})
export class ListCampaignComponent implements OnInit {
  listCampaign = [];
  constructor() { }

  ngOnInit(): void {
    this.fetchCampaigns()
  }

  fetchCampaigns(): void {
    axios.get('http://localhost:3000/api/campaigns/index')
      .then(resp => {
          this.listCampaign = resp.data
      })
      .catch(err => {
          // Handle Error Here
          console.error(err);
      });
  }

  getRemainDays(expiredDate: Date): Number {
    return 0;
  }

}
