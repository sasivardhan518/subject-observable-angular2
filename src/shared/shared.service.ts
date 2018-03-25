import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

@Injectable()
export class SharedService {
  private subject = new Subject<any>();
  private progressBarSubject = new Subject<any>();
constructor() { }

sendMessage(message: string) {
  this.subject.next({ text: message });
}

clearMessage() {
  this.subject.next();
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}

showProgressBar() {
  this.progressBarSubject.next({isVisible: true, bodyHeight: $(document).height()});
}

hideProgressBar() {
  const bodyHeight: number = $(document).height();
this.progressBarSubject.next({isVisible: false, bodyHeight: bodyHeight});
}

progressBarStatus(): Observable<any> {
 return this.progressBarSubject.asObservable();
}

}
