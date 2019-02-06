import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  //Same principle but using users and items
  user: User;
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeUser(user: User) {
    this.userSource.next(user);
  }

  //In recieving component:
  /*
  dependency inject this service.
  this.dataTransferService.messageSource.Subscribe(message => this.message = message);

  Other component:
  ngOnInit() {
    this.dataTransferService.messageSource.Subscribe(message => this.message = message);
  }

  newMessage() {
    this.dataTransferService.changeMessage("Write something");
  }
  */
}
