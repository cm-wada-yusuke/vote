import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VoteChartComponent} from './vote-chart/vote-chart.component';
import {VoteBarChartComponent} from './vote-bar-chart/vote-bar-chart.component';
import {HttpModule} from '@angular/http';
import {VoteDataService} from './vote-bar-chart/vote-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    VoteChartComponent,
    VoteBarChartComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    VoteDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
