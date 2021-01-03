import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { HomeLayoutRoutes } from './home-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from 'src/app/home_pages/signup/signup.component';
import { SigninComponent } from 'src/app/home_pages/signin/signin.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ]
})

export class HomeLayoutModule {}
