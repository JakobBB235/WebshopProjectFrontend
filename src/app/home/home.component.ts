import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[];
  constructor(){}

  ngOnInit(){
    // this.getItems();
  }

  // getItems(){
  //   this.apiService.getAllItems().subscribe((response: Item[]) => {  
  //     console.log(response);
  //     //If all goes well.
  //     this.items = response;
  //   }, error => {
  //     console.log("Error!", error);

  //     //If web service fails.
      
  //   }); 
  // }

}
