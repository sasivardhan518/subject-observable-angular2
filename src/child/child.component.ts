import {Input, Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userFromParent: User;
  @Input() messageFromParent: string;
  @Output() messageFromParentChange= new EventEmitter<string>();
  constructor() {
    this.userFromParent = new User();
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.userFromParent);
  }
}
