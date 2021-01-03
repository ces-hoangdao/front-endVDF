import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';
import { DataService } from '../sercive/data-service.service';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.css']
})
export class ListCampaignComponent implements OnInit {
  listCampaign = [];
  message = '';

  constructor(private data: DataService) { }
  
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
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

  changeMessage(message: string): void {
    this.data.changeMessage(message)
  }

}
