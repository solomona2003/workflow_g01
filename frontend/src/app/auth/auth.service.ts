import { UIService } from './../shared/ui-features.service';
import { element } from 'protractor';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { Subscription } from 'rxjs';



@Injectable()
export class AuthService {
authChange = new Subject <boolean>();
errorMessage = new Subject <string>();
private isAuthenticated = false;

    constructor (private router: Router, private afAuth: AngularFireAuth, private uIService: UIService) {}
    registerUser (authData: AuthData) {
        this.uIService.loadingStateChanged.next(true);

      this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(
          result => {
            this.uIService.loadingStateChanged.next(false);

              this.authSuccesfully();
          }
      ).catch(error => {
        this.errorMessage.next(error);
        this.uIService.loadingStateChanged.next(false);

      });
    }


    login (authData: AuthData) {
        this.uIService.loadingStateChanged.next(true);
      this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
            result => {
                this.uIService.loadingStateChanged.next(false);
                this.authSuccesfully();
            }
        ).catch(error => {
            this.errorMessage.next(error);
            console.log('errer login' + error);
            this.uIService.loadingStateChanged.next(false);

        });
    }


    logout() {
        this.router.navigate(['/login']);
        this.authChange.next(false);
        this.isAuthenticated = false;
        
      
    }

    isAuth() {
       return this.isAuthenticated;  // return false if the user is not signed in
    }

private authSuccesfully () {
    this.authChange.next(true);
    this.isAuthenticated = true;
    this.router.navigate(['/requestinput']);
}

}
