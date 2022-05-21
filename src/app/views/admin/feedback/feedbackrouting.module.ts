import { NgModule } from '@angular/core';
import { FeedbackComponent } from './feedback.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"",component:FeedbackComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class FeedbackroutingModule { }
