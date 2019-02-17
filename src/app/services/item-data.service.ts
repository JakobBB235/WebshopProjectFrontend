import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private http: HttpClient) { }

  //For data transfer
  item: Item;
  private itemSource = new BehaviorSubject(this.item);
  currentItem = this.itemSource.asObservable(); //Subscribe on this to gain access to the data

  //Call this method to change the data
  changeItem(item: Item) {
    this.itemSource.next(item);
    console.log("Item added to datatransferservice" + item);
  }

  //API related methods
  getAllItems(){
    return this.http.get(environment.apiUrl + "/item");
  }

  getItem(id: any){//number 
    return this.http.get(environment.apiUrl + "/item/" + id);
  }

  addItem(item: Item){ 
    return this.http.post(environment.apiUrl + "/item", item);
  }

  deleteItem(id: number){ 
    return this.http.delete(environment.apiUrl + "/item/" + id); 
  }

  updateItem(item: Item){ 
    console.log("Update method called")
    return this.http.put(environment.apiUrl + "/item/" + item.itemId, item); 
  }
}
