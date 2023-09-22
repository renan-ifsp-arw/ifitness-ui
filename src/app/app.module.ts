import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { ActivitiesModule } from './activities/activities.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ActivitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
