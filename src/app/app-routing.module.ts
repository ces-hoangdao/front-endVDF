import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {CreateCampaignComponent} from './create-campaign/create-campaign.component';
import {ArticlesComponent} from './articles/articles.component';
import {AboutComponent} from './about/about.component';
import {ExploreComponent} from './explore/explore.component';
import {ContactComponent} from './contact/contact.component';
import {FaqsComponent} from './faqs/faqs.component';
import {DonateComponent} from './donate/donate.component';



const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
     component: HomepageComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'projectdetail',
    component: ProjectDetailComponent
  },
  {
    path: 'create-campaign',
    component: CreateCampaignComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'faqs',
    component: FaqsComponent
  },
  {
    path:'donate',
    component:DonateComponent
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
