import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  campaignData = {};
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    let campaignId = this.route.snapshot.paramMap.get('campaignId');
    console.log(campaignId)
    this.fetchCampaignData(campaignId);
  }

  fetchCampaignData(campaignId: string): void {
    axios.get('http://localhost:3000/api/campaigns/show?campaignId='+campaignId)
    .then(resp => {
        console.log(resp.data)
        this.campaignData = resp.data
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
  }

}
