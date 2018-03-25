import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private sharedService: SharedService) {
  }

  sendMessage() {
    this.sharedService.sendMessage('Hi this is shared component message.');
    this.sharedService.showProgressBar();
    setTimeout(() => { this.sharedService.hideProgressBar(); }, 1000);
  }
  clearMessage() {
    this.sharedService.clearMessage();
  }
}
