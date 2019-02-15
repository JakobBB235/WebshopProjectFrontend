import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  loggedInUser: User;
  constructor(private userService: UserDataService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe((response: User) => {
      if(response) {
        this.loggedIn = true;
        this.loggedInUser = response;
      }
    });
  }

}
