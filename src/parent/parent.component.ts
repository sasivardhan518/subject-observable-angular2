import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
message: string;
user: User;
  constructor() {
    this.message = 'Hello world!';
    this.user = new User();
    this.user.userName = 'shashi';
    this.user.age = 25;
    this.user.gender = 'male';
  }

  ngOnInit() {
  }
  messageFromParentChanged(message: string) {
     this.message = message;
  }

  submit() {
    console.log(this.user);
  }
}
