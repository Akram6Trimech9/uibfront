import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks : any [ ]=[];


  constructor(private feedbackService :FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(res=>{
      this.feedbacks=res;
    })
  }


}
