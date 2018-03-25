import {Input, Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string;
  @Output() messageFromParentChange= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
