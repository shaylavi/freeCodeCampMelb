import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivitytableComponent } from './activitytable/activitytable.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { DataService } from './data-service.service';
import { IntroComponent } from './intro/intro.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FuturePlansComponent } from './future-plans/future-plans.component';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivitytableComponent,
    IntroComponent,
    UsersListComponent,
    AboutUsComponent,
    SponsorPageComponent,
    BenefitsComponent,
    FuturePlansComponent,
    WhatToDoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'freecodecampmelb')
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
