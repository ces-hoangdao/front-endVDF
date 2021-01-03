import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { DonateComponent } from './donate/donate.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NavComponent } from './nav/nav.component';
import { AdminNavComponent } from './adminpage/admin-nav/admin-nav.component';
import { AdminMenuComponent } from './adminpage/admin-menu/admin-menu.component';
import { AdminCampaignComponent } from './adminpage/admin-campaign/admin-campaign.component';
import { AdminInfoComponent } from './adminpage/admin-info/admin-info.component';

import { CommonModule } from '@angular/common';
import { ThankyouComponent } from './thankyou/thankyou.component';  





@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    FooterComponent,
    BannerComponent,
    CategoryComponent,
    ListCampaignComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    ProjectDetailComponent,
    CreateCampaignComponent,
    IntroduceComponent,
    AboutComponent,
    ExploreComponent,
    DonateComponent,
    FaqsComponent,
    AdminpageComponent,
    NavComponent,
    AdminNavComponent,
    AdminMenuComponent,
    AdminCampaignComponent,
    AdminInfoComponent,
    ThankyouComponent,   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
