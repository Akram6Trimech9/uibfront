import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesrdvRoutingModule } from './mesrdv-routing.module';
import { MesrdvComponent } from './mesrdv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MesrdvComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MesrdvRoutingModule
  ]
})
export class MesrdvModule { }
