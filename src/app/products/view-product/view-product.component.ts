import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnChanges {

  @Input() viewItem: Item;
  // @Output() productViewClicked: EventEmitter<any> = new EventEmitter;
  // viewItem: Item;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    console.log("Heh");
    var currentPathSplit = this.router.url.split("/");
    var currentId = currentPathSplit[currentPathSplit.length-1];
    console.log(currentPathSplit);
    console.log(currentId);
    
    this.apiService.getItem(currentId).subscribe((response: Item) => {  
      console.log(response);
      //If all goes well.
      this.viewItem = response;
    }, error => {
      console.log("Error!", error);

      //If web service fails.
      
    });
  }

  ngOnChanges(){
    
  }

  // onViewClick(){
  //   this.productViewClicked.emit(this.item);
  // }
}
