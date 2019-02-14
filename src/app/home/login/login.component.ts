import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UserDataService } from 'src/app/services/user-data.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserDataService, private authService: AuthService) { }
  // , private apiService: ApiService, private dataTransferService: DataTransferService

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.maxLength(100)]],
        password: ['', Validators.required]
      }
    )
  }

  onSubmit(loginForm){
    if (loginForm.valid){
      // alert("valid"); 
      this.attemptLogin(loginForm);
    } else
      alert("invalid");
    console.log(loginForm)
  }
  
  attemptLogin(loginForm){
    let user = loginForm.value as User;
    // this.apiService.login(user).subscribe(response => {  
    this.userService.login(user).subscribe(response => {  
      console.log(response);
      var loggedInUser = response as User;
      // this.dataTransferService.changeUser(loggedInUser);
      this.userService.changeUser(loggedInUser);

      this.authService.login().subscribe(result => {
        console.log("Logged in as user");
        this.router.navigate(['/portal']);
      }); //Allow access if credentials was found in the database.
      //If all goes well.
    }, error => {
      console.log("Error!", error);
      //If web service fails.
    }); 
    this.router.navigate(['/portal']); //Navigate
  }

}
