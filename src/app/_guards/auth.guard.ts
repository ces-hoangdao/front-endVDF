import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {

    //middleware to make sure that user has signed in
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
