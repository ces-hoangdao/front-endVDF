import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { ApiService } from './_services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { CampaingsComponent } from './pages/campaigns/campaigns.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NavComponent } from './home_pages/nav/nav.component';
import { FooterComponent } from './home_pages/footer/footer.component';
import { BannerComponent } from './home_pages/banner/banner.component';
import { CategoryComponent } from './home_pages/category/category.component';
import { ListCampaignComponent } from './home_pages/list-campaign/list-campaign.component';
import { SignupComponent } from './home_pages/signup/signup.component';
import { SigninComponent } from './home_pages/signin/signin.component';
import { HomepageComponent } from './home_pages/homepage/homepage.component';
import { ProjectDetailComponent } from './home_pages/project-detail/project-detail.component';
import { CreateCampaignComponent } from './home_pages/create-campaign/create-campaign.component';
import { IntroduceComponent } from './home_pages/introduce/introduce.component';
import { AboutComponent } from './home_pages/about/about.component';
import { ExploreComponent } from './home_pages/explore/explore.component';
import { DonateComponent } from './home_pages/donate/donate.component';
import { FaqsComponent } from './home_pages/faqs/faqs.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CampaingsComponent,
    HomeLayoutComponent,
    NavComponent,
    FooterComponent,
    BannerComponent,
    CategoryComponent,
    ListCampaignComponent,
    HomepageComponent,
    ProjectDetailComponent,
    CreateCampaignComponent,
    IntroduceComponent,
    AboutComponent,
    ExploreComponent,
    DonateComponent,
    FaqsComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
    ApiService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
