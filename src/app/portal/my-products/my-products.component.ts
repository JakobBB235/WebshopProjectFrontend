import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/entities/item';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  items: Item[]; // pass all items to child?

  //Alternatively implement redux
  
  item: Item;//Data from child to parent
  @Output() itemEditClicked: EventEmitter<any> = new EventEmitter;//Data from child to parent

  user: User;

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

  //for data transfer
  onItemDeleteClicked(item: Item){
    alert("Are you sure you want to delete this product?");
    this.apiService.deleteItem(item.itemId).subscribe(response => {
      console.log(response);
      //If all goes well.
      this.items = this.items.filter(x => x.itemId !== item.itemId);
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    });
  }

  onItemEditClicked(item: Item){
    console.log("TEST");
    this.itemEditClicked.emit(item); //this.item
  }
}
