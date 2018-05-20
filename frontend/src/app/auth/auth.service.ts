import { element } from 'protractor';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';



@Injectable()
export class AuthService {
authChange = new Subject <boolean>();
   private isAuthenticated = false;

    constructor (private router: Router, private afAuth: AngularFireAuth) {}

    registerUser (authData: AuthData) {
      this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(
          result => {
              this.authSuccesfully();
          }
      ).catch(error => {
      });
    }


    login (authData: AuthData) {
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
            result => {
                console.log(result);
                this.authSuccesfully();
            }
        ).catch(error => {
            console.log(error);

        });
    }


    logout() {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
    }

    isAuth() {
       return this.isAuthenticated;  // return false if the user is not signed in
    }

private authSuccesfully () {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/requestinput']);
}

}
