import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  campaignData  = {};

  donation = new FormGroup({
    amount: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  ngOnInit(): void {
    let campaignId = this.route.snapshot.paramMap.get('campaignId');
    console.log(campaignId)
    this.fetchCampaignData(campaignId);
  }

  onSubmit(){
    let donationData = {
      campaign: this.campaignData._id,
      message: this.donation.value.message,
      amount: this.donation.value.amount
    }
    axios.post(
      'http://localhost:3000/api/donation/create',
      donationData,
      { headers: { 'Authorization': `Bearer ` + localStorage.getItem('token') } }
    )
    .then(resp => {
      alert(resp.data)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
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
