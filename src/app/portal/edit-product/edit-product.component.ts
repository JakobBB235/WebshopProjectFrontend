import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/entities/item';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnChanges {

  editProductForm;
  @Input() editItem: Item; //Data from parent to child

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  /*
  TODO: Make the existing data appear in all input fields.
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
    this.apiService.addItem(item).subscribe(response => {  
      console.log(response);
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
    this.router.navigate(['/portal']); //Navigate
  }
}
