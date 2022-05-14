import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseillerloginComponent } from './conseillerlogin.component';

const routes: Routes = [
  {path:"",component:ConseillerloginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillerloginRoutingModule { }
