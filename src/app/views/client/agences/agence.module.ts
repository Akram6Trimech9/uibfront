import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenceroutingModule } from './agencerouting.module';
import { AgencesComponent } from './agences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/MaterialModule';






@NgModule({
  declarations: [
    AgencesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AgenceroutingModule,
   MaterialModule

  ]
})

export class AgenceModule { }
