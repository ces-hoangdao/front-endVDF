import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CategoryComponent } from '../category/category.component';
import { ListCampaignComponent } from '../list-campaign/list-campaign.component';
import {IntroduceComponent} from '../introduce/introduce.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
