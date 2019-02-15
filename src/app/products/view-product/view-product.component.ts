import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Item } from 'src/app/entities/item';
import { Router } from '@angular/router';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnChanges {

  // @Input() viewItem: Item;
  viewItem: Item;

  // @Output() productViewClicked: EventEmitter<any> = new EventEmitter;
  // viewItem: Item;

  constructor(private itemService: ItemDataService, private router: Router) { }

  ngOnInit() {
    var currentPathSplit = this.router.url.split("/");
    var currentId = currentPathSplit[currentPathSplit.length-1];
    console.log(currentPathSplit);
    console.log(currentId);

    this.itemService.currentItem.subscribe(response => {
      //If statement is to not send a request for the item if the item has been clicked on in parent component
      if (response.itemId === Number(currentId))
        this.viewItem = response;
      else {
        this.itemService.getItem(currentId).subscribe((response: Item) => {  
          console.log(response);
          //If all goes well.
          this.viewItem = response;
        }, error => {
          console.log("Error!", error);
          //If web service fails.
        });
      }
    });
  }

  ngOnChanges(){
    
  }

  // onViewClick(){
  //   this.productViewClicked.emit(this.item);
  // }
}
