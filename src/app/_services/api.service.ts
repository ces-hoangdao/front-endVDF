import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    public token: string;
    public headers: any = {};

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('token');
        this.headers = {
            'Authorization': 'Bearer '+this.token
        };
    }

    getMyCampaigns(): any {
        const headers = this.headers;
        const body = {};
        return this.http.get('http://localhost:3000/api/campaigns/indexMyCampaigns', {headers});
    }

    deleteCampaign(id): any {
        const headers = this.headers;
        const body = {
            campaignId: id
        };
        return this.http.post('http://localhost:3000/api/campaigns/delete',body, {headers});
    }

    getProfile(): any {
        const headers = this.headers;
        const body = {};
        return this.http.get('http://localhost:3000/api/auth/me', {headers});
    }
}