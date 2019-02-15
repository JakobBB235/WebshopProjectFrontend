import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { Router } from '@angular/router';
import { ItemDataService } from '../services/item-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items: Item[]; // pass all items to child?
  itemToChild: Item; //Data from parent to child

  constructor(private itemService: ItemDataService, private router: Router) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe((response: Item[]) => {  
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
    this.itemService.changeItem(item);
    this.router.navigate(['/products/' + item.itemId]);
  }
}
