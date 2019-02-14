import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/entities/item';
import { User } from 'src/app/entities/user';
import { ItemDataService } from 'src/app/services/item-data.service';
import { UserDataService } from 'src/app/services/user-data.service';

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

  constructor(private itemService: ItemDataService, private router: Router, private userService: UserDataService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe((response: Item[]) => {  
      console.log(response);
      //If all goes well.
      // this.items = response;
      this.userService.currentUser.subscribe(reponse => {
        this.user = reponse;
      });
      this.items = response.filter(item => item.userId === this.user.userId);
      console.log(this.items);
    }, error => {
      console.log("Error!", error);

      //If web service fails.
      
    });
  }

  //for data transfer
  onItemDeleteClicked(item: Item){
    alert("Are you sure you want to delete this product?");
    this.itemService.deleteItem(item.itemId).subscribe(response => {
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
