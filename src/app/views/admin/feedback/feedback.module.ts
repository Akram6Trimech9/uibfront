import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { FeedbackroutingModule } from './feedbackrouting.module';



@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FeedbackroutingModule
    
  ]
})
export class FeedbackModule { }
