import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  //For data transfer
  user: User;
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable(); //Subscribe on this to gain access to the data

  //Call this method to change the data
  changeUser(user: User) {
    this.userSource.next(user);
    console.log("User added to datatransferservice" + user);
  }

  //API related methods
  getAllUsers(){
    return this.http.get(environment.apiUrl + "/user");
  }

  getUser(id: number){
    return this.http.get(environment.apiUrl + "/user/" + id);
  }

  addUser(user: User){ 
    return this.http.post(environment.apiUrl + "/user", user);
  }

  deleteUser(id: string){ 
    return this.http.delete(environment.apiUrl + "/user/" + id); 
  }

  updateUser(user: User){ 
    return this.http.put(environment.apiUrl + "/user/" + user.userId, user); 
  }

  //Login
  login(user: User){
    // this.changeUser(user);
    return this.http.post(environment.apiUrl + "/user/login", user)
  }
}
