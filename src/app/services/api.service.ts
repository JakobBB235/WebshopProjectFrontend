import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  
  getAllItems(){
    return this.http.get(environment.apiUrl + "/item");
  }

  getItem(id: number){
    return this.http.get(environment.apiUrl + "/item/" + id);
  }

  addItem(item: Item){ 
    return this.http.post(environment.apiUrl + "/item", item);
  }

  deleteItem(id: string){ 
    return this.http.delete(environment.apiUrl + "/item/" + id); 
  }

  updateItem(item: Item){ 
    return this.http.put(environment.apiUrl + "/item/" + item.id, item); 
  }
}
