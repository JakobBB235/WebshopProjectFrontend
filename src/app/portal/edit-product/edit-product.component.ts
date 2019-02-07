import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/entities/item';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnChanges {

  editProductForm;
  @Input() editItem: Item; //Data from parent to child

  constructor(private fb: FormBuilder, private itemService: ItemDataService, private router: Router) { }

  /*
  TODO: Make the existing data appear in all input fields. 
  Get the item object from path parameter instead! Because my products will eventually use pagination(not load all available objects at the same time.)
  */
  ngOnInit() {
    this.editProductForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(100)]],
        inStock: ['', Validators.required],
        priceForOneItem: ['', Validators.required],
        description: ['', Validators.required],
        // category: ['', Validators.required],
        
        // weightMeasurement: ['', Validators.required],
        // priceBasedOnWeight: ['', Validators.required],
        expirationDate: ['']
      }
    )

    this.editProductForm.setValue(this.editItem) //Takes product as parameter
  }

  ngOnChanges(changes: SimpleChanges){
    // // this.item = changes.item;
    // this.editProductForm.setValue(this.item) //Takes product as parameter
  }

  onSubmit(editProductForm){
    if (editProductForm.valid){
      // alert("valid"); 
      this.editExistingProduct(editProductForm);
    } else
      alert("invalid");
    console.log(editProductForm)
  }

  editExistingProduct(editProductForm){
    let item = editProductForm.value as Item;
    this.itemService.addItem(item).subscribe(response => {  
      console.log(response);
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
    this.router.navigate(['/portal']); //Navigate
  }
}
