import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VoteBarChartComponent} from './vote-bar-chart/vote-bar-chart.component';
import {HttpModule} from '@angular/http';
import {VoteDataService} from './vote-bar-chart/vote-data.service';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {CognitoService} from './cognito.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    VoteBarChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    VoteDataService,
    CognitoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
