import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaingsComponent implements OnInit {
  campaigns : Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    this.apiService.getMyCampaigns().subscribe(result => {
      this.campaigns = result.map(campaign => ({
        ...campaign,
        sumDonations: campaign.donation.reduce((a,b) => a+b.amount , 0),
        completion: ((campaign.donation.reduce((a,b) => a+b.amount , 0)/campaign.goal)*100).toFixed(2)
      }));
    });
  }

  onDelete(id) {
    console.log(id)
    if(confirm("Are you sure to delete this campaign?")){
      this.apiService.deleteCampaign(id).subscribe(result => {
        if(result.success) {
          this.getCampaigns();
        }
      })
    }
  }
}
