import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userName = 'Chinmaya';
  newUserName = '';
  newuserNameEmpty = true;

  checkUserName() {
    if (this.newUserName !== '') {
      this.newuserNameEmpty = false;
    }
  }

  updateUsreName(){
    this.userName=this.newUserName;
  }
  constructor() {}

  ngOnInit(): void {}
}
