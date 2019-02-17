import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/entities/item';
import { Validators, FormBuilder } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss']
})
export class CreateEditProductComponent implements OnInit {

  viewItem;
  isCreatingItem: boolean;
  productForm;
  
  constructor(private fb: FormBuilder, private router: Router, private itemService: ItemDataService, private userService: UserDataService) { }

  ngOnInit() {
    var currentPathSplit = this.router.url.split("/");
    var currentId = currentPathSplit[currentPathSplit.length-1]; //(example:"portal/product/222") currentId = 222 in this example
    console.log(currentPathSplit);
    console.log(currentId);

    this.itemService.currentItem.subscribe(response => {
      //Option 1: If currentId is a number (example:"portal/product/222") and matches the item. (gone to path by clicking on edit in parent component)
      if (response && response.itemId === Number(currentId)) { 
        this.viewItem = response;
        this.isCreatingItem = false;
      }

      //Option 2: If item is a number(example:"portal/product/222"), but Edit button on parent component has not been clicked.(gone to path by typing url)
      else if (!isNaN(Number(currentId))){ 
        //Try to get item from API
        this.itemService.getItem(currentId).subscribe((response: Item) => {  
          console.log(response);
          //If all goes well.
          this.viewItem = response;
        }, error => {
          console.log("Error!", error);
          //If web service fails.
        });
      }

      //Option 3: If currentId is not a number. Must mean that user is on path (example:"portal/product" and is creating a new item)
      else
        this.isCreatingItem = true
    });


    //Reactive form validation
    this.productForm = this.fb.group(
      {
        //Not included start
        itemId:[''],
        active:[''],
        category:[''],
        weightMeasurement:[''],
        priceBasedOnWeight:[''],
        dateTimeCreated:[''],
        dateTimeEdited:[''],
        userId:[''],
        //Not included end

        name: ['', [Validators.required, Validators.maxLength(100)]],
        inStock: ['', Validators.required],
        priceForOneItem: ['', Validators.required],
        description: ['', Validators.required],
        // category: ['', Validators.required],
        
        // weightMeasurement: ['', Validators.required],
        // priceBasedOnWeight: ['', Validators.required],
        expirationDate: ['']
      }
    );
    console.log(this.viewItem);
    console.log(this.isCreatingItem);

    //To fill out the form with the item values.
    if(!this.isCreatingItem)
        this.productForm.setValue(this.viewItem)
  }

  onSubmit(productForm){
    if (productForm.valid){
      console.log("isCreatingItem" + this.isCreatingItem);
      if(this.isCreatingItem)
        this.createNewProduct(productForm);
      else if (!this.isCreatingItem) //This does not work even though boolean is false
        this.updateExistingProduct(productForm);
    } else
      alert("Form is invalid!");
    console.log(productForm)
  }
  
  createNewProduct(productForm){
    let item = productForm.value as Item;
    this.userService.currentUser.subscribe(user => item.userId = user.userId);
    console.log(item);

    this.itemService.addItem(item).subscribe((response: Item) => {  
      console.log(response);
      this.router.navigate(['/products/' + response.itemId]); //Navigate or stay?
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
  }

  updateExistingProduct(productForm){
    let item = productForm.value as Item;
    this.userService.currentUser.subscribe(user => item.userId = user.userId);
    console.log(item);

    this.itemService.updateItem(item).subscribe((response: Item) => {  
      console.log(response);
      this.router.navigate(['/products/' + item.itemId]); //Navigate or stay?
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
  }
}
