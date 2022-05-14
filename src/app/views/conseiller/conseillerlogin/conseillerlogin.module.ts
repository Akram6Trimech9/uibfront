import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConseillerloginRoutingModule } from './conseillerlogin-routing.module';
import { ConseillerloginComponent } from './conseillerlogin.component';


@NgModule({
  declarations: [ConseillerloginComponent],
  imports: [
    CommonModule,
    ConseillerloginRoutingModule
  ]
})
export class ConseillerloginModule { }
