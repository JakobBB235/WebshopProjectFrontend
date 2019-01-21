import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Item } from '../entities/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items: Item[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllItems().subscribe((response: Item[]) => {  
      console.log(response);
      //If all goes well.
      this.items = response;
    }, error => {
      console.log("Error!", error);

      //If web service fails.
      
    });
  }

}
