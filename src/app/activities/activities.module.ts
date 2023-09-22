import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    ActivitiesListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    ActivitiesListComponent
  ]
})
export class ActivitiesModule { }
