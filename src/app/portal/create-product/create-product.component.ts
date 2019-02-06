import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/entities/item';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  registerProductForm;
  user: User;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.registerProductForm = this.fb.group(
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
  }

  onSubmit(registerProductForm){
    if (registerProductForm.valid){
      // alert("valid"); 
      this.createNewProduct(registerProductForm);
    } else
      alert("invalid");
    console.log(registerProductForm)
  }
  
  createNewProduct(registerProductForm){
    let item = registerProductForm.value as Item;
    item.user = this.user;
    this.apiService.addItem(item).subscribe(response => {  
      console.log(response);
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 

    // this.user.items.concat(item); //Add item to the logged in user.
    // this.apiService.saveUser(this.user).subscribe(response => {
    //   console.log(response);
    // }, error => {
    //   console.log("Error!", error);
    // });
    this.router.navigate(['/portal']); //Navigate
  }
}
