import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesrdvComponent } from './mesrdv.component';

const routes: Routes = [
  {path:"",component:MesrdvComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesrdvRoutingModule { }
