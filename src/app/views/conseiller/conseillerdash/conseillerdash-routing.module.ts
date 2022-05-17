import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseillerdashComponent } from './conseillerdash.component';
import { webSocket } from 'rxjs/webSocket';

const routes: Routes = [
  {path:"",component:ConseillerdashComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConseillerdashRoutingModule { }
