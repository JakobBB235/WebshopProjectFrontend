import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserForm;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserDataService) { }

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
    this.userService.addUser(user).subscribe(response => {  
      console.log(response);
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
    this.router.navigate(['/home/login']); //Navigate
  }

}
