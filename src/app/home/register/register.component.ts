import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserForm;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.registerUserForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.maxLength(100)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', Validators.required],
      }
    )
  }

  onSubmit(registerUserForm){
    if (registerUserForm.valid){
      // alert("valid"); 
      this.createNewUser(registerUserForm);
    } else
      alert("invalid");
    console.log(registerUserForm)
  }
  
  createNewUser(registerUserForm){
    let user = registerUserForm.value as User;
    this.apiService.addUser(user).subscribe(response => {  
      console.log(response);
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
    this.router.navigate(['/home/login']); //Navigate
  }

}
