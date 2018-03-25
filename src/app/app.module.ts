import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedComponentComponent } from '../shared-component/shared-component.component';
import { SharedService } from '../shared/shared.service';
import { LoaderComponent } from '../loader/loader.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponentComponent,
    LoaderComponent,
    ParentComponent,
    ChildComponent
],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
