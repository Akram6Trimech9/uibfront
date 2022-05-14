import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { ConseillerdashRoutingModule } from './conseillerdash-routing.module';
import { ConseillerdashComponent } from './conseillerdash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/MaterialModule';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    ConseillerdashComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
     ConseillerdashRoutingModule
  ]
})
export class ConseillerdashModule { }
