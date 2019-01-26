import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../entities/item';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  
  //Items
  getAllItems(){
    return this.http.get(environment.apiUrl + "/item");
  }

  getItem(id: any){//number 
    return this.http.get(environment.apiUrl + "/item/" + id);
  }

  addItem(item: Item){ 
    return this.http.post(environment.apiUrl + "/item", item);
  }

  deleteItem(id: string){ 
    return this.http.delete(environment.apiUrl + "/item/" + id); 
  }

  updateItem(item: Item){ 
    return this.http.put(environment.apiUrl + "/item/" + item.itemId, item); 
  }

  //Users. Perhaps make new service for each new entity? Perhaps always load user and have items nested inside json?
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
}
