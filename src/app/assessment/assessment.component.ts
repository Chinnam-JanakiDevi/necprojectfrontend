import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {
  constructor(private appComponent: AppComponent) { }
  question:string[]=this.appComponent.questions;

  ques() {
  console.log(this.question);
  }
}
