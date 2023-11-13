import { Component,OnInit,OnDestroy } from '@angular/core';
import { Csesubjects } from './csesubjects';
import { CsesubjectsService } from './csesubjects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: CsesubjectsService) { }
  canShowData: boolean = false;
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  csesub: Csesubjects = {
    subjects:'',
    sem:''
  };
  a = [];
  SuccessMsg = '';
  ErrorMsg = '';  title = 'necprojectfrontend';
  Read(semester:string) {
    this.Subscription = this.service.Read(semester).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          console.log(data.Result);
          this.a = data.Result;
          console.log(this.a);       
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
}
