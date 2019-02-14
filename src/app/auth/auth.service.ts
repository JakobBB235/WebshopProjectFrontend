// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  //If something returns observable and no one is subscribed the code is not run. 
  login(): Observable<boolean> { //Observables is a part of rxjs libary. It does not because we are not subscribed
    return of(true).pipe(
      delay(1000), //simulates server
      tap(val => {
        this.isLoggedIn = true
        console.log(this.isLoggedIn)
      }) 
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}