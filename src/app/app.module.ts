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
    CampaingsComponent
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
