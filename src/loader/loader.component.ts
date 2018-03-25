import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isVisible = true;
  subscription: Subscription;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    setTimeout(()=>{this.isVisible = false; } , 500);
    this.subscription = this.sharedService.progressBarStatus().subscribe(isVisible => { this.isVisible = isVisible; } );
  }

}
