import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedComponentComponent } from '../shared-component/shared-component.component';
import { SharedService } from '../shared/shared.service';
import { LoaderComponent } from '../loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponentComponent,
    LoaderComponent
],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
