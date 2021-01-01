import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
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



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
