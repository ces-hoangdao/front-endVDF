import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import axios from 'axios';

const API_URL_CREATE_CAMPAIGN = 'http://localhost:3000/api/campaigns/create';
@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css'],
})
export class CreateCampaignComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  campaign = new FormGroup({
    campaignContent: new FormControl(''),
    campaignName: new FormControl(''),
    shortDescription: new FormControl(''),
    goal: new FormControl(''),
    expiredDate: new FormControl(''),
    groupName: new FormControl(''),
  });
  onSubmit() {
    console.log(this.campaign.value.campaignContent);
    console.log(this.campaign.value.campaignName);
    console.log(this.campaign.value.shortDescription);
    console.log(this.campaign.value.goal);
    console.log(this.campaign.value.expiredDate);
    console.log(this.campaign.value.groupName);
    this.createCampaign(
      this.campaign.value.campaignName,
      this.campaign.value.shortDescription,
      this.campaign.value.expiredDate,
      this.campaign.value.campaignContent,
      this.campaign.value.goal
    );
  }
  createCampaign = (
    name: any,
    shortDescription: any,
    expiredDate: any,
    fullDescription: any,
    goal: any
  ) => {
    return axios
      .post(API_URL_CREATE_CAMPAIGN, {
        name,
        shortDescription,
        expiredDate,
        fullDescription,
        goal,
        statusId: '',
        categoryId: '',
        coverImageUrl: '',
      },
      { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } } )
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        window.location.replace('/home')
      });
  };
}
