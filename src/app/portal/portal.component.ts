import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  clickedItem: Item;
  // itemToChild: Item;
  // clickedEvent: Event;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Data from child to parent???
  childEventClicked(item: Item){ //event: Event
    this.clickedItem = item;
    console.log(item);
    this.router.navigate(['portal/edit'])
  }

  onChildItemEditClicked(item: Item){
    // this.itemToChild = item;
    this.router.navigate(['/products/' + item.itemId]);
  }
}
