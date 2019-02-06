import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Item } from '../entities/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items: Item[]; // pass all items to child?
  itemToChild: Item; //Data from parent to child

  constructor(private apiService: ApiService, private router: Router) { }

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

  onItemViewClicked(item: Item){
    this.itemToChild = item;
    /*
    Get data from this parent component to child component view-product on click.
    If 
     */
    this.router.navigate(['/products/' + item.itemId]);
  }
}
