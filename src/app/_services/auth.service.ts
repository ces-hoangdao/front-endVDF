import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    public token: string;

    constructor(private http: HttpClient) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.accessToken;
    }

    login(username: string, password: string): any {
        return this.http.post('http://localhost:3000/api/auth/signin', { 
            userName: username, 
            password: password });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}