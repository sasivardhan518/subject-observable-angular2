import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: []
})
export class SharedComponentComponent implements OnInit {
  message: any;
  subscription: Subscription;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.subscription = this.sharedService.getMessage().subscribe((data) => {
      this.message = data && data.text ? data.text : '';
    });
  }

}
