import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
  this.progressBarSubject.next(true);
}

hideProgressBar() {
this.progressBarSubject.next(false);
}

progressBarStatus(): Observable<any> {
 return this.progressBarSubject.asObservable();
}

}
