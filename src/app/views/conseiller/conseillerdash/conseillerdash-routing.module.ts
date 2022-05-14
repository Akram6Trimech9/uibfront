import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseillerdashComponent } from './conseillerdash.component';

const routes: Routes = [
  {path:"",component:ConseillerdashComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillerdashRoutingModule { }
