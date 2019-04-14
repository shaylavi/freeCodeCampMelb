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

@NgModule({
  declarations: [
    AppComponent,
    ActivitytableComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'freecodecampmelb')
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
