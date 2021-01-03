import { Routes } from '@angular/router';
import { SigninComponent } from 'src/app/home_pages/signin/signin.component';
import { SignupComponent } from 'src/app/home_pages/signup/signup.component';
import { ProjectDetailComponent } from 'src/app/home_pages/project-detail/project-detail.component';
import { CreateCampaignComponent } from 'src/app/home_pages/create-campaign/create-campaign.component';
import { ArticlesComponent } from 'src/app/home_pages/articles/articles.component';
import { AboutComponent } from 'src/app/home_pages/about/about.component';
import { ExploreComponent } from 'src/app/home_pages/explore/explore.component';
import { ContactComponent } from 'src/app/home_pages/contact/contact.component';
import { FaqsComponent } from 'src/app/home_pages/faqs/faqs.component';
import { DonateComponent } from 'src/app/home_pages/donate/donate.component';
import { HomepageComponent } from 'src/app/home_pages/homepage/homepage.component';

export const HomeLayoutRoutes: Routes = [
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
      },
];
