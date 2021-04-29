import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.css'],
})
export class AssignmentOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buttonText = 'show password';
  password = 'chinmaya#2516745';
  isSecure=true;
  count=1;
  buttonClickLog=[];
  changeButtonText() {
    this.isSecure=!this.isSecure
    // this.buttonClickLog.push(this.count)
    // this.count+=1;
     this.buttonClickLog.push(new Date());
    if (this.buttonText == 'show password') {
      this.buttonText = 'hide password';
      return;
    }
    this.buttonText = 'show password';
  }
}
