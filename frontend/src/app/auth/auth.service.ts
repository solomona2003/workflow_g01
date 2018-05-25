import { UIService } from './../shared/ui-features.service';
import { element } from 'protractor';
import { AuthData } from './auth-data.model';
import { Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { Subscription, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { GoogleAuthProvider_Instance } from '@firebase/auth-types';



@Injectable()
export class AuthService {
authChange = new Subject <boolean>();
authAdminChange = new Subject <boolean>();
errorMessage = new Subject <string>();
private isAuthenticated = false;
private isAdminAuthenticated = false;


googleorfacebookAuthState: any = null;

    constructor (private router: Router, private afAuth: AngularFireAuth, private uIService: UIService) {
        this.afAuth.authState.subscribe((auth) => {
            this.googleorfacebookAuthState = auth;
          });
    }
// google sign in


googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.googleorfacebookAuthState = credential.user;
        if (this.googleorfacebookAuthenticated) {
            this.authChange.next(true);
            this.isAuthenticated = true;
            this.router.navigate(['/requestinput']);
        }
      })
      .catch(error => console.log(error));
  }

   // Returns true if user is logged in
   get googleorfacebookAuthenticated(): boolean {
    return this.googleorfacebookAuthState !== null;
  }


// end of google sign in


    registerUser (authData: AuthData) {
        this.uIService.loadingStateChanged.next(true);

      this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(
          result => {
              this.googleorfacebookAuthState = result.user;
            this.uIService.loadingStateChanged.next(false);

              this.authSuccesfully();
          }
      ).catch(error => {
        this.errorMessage.next(error);
        this.uIService.loadingStateChanged.next(false);

      });
    }

// email and pass login
    login (authData: AuthData) {
        this.uIService.loadingStateChanged.next(true);
      this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
            result => {
                this.uIService.loadingStateChanged.next(false);
                this.authSuccesfully();
                if (authData.email === '123@yahoo.com') {
                this.authAdminChange.next(true);
                }
            }
        ).catch(error => {
            this.errorMessage.next(error);
            console.log('errer login' + error);
            this.uIService.loadingStateChanged.next(false);

        });
    }

// email and pass logout
    logout() {
        this.authChange.next(false);
        this.authAdminChange.next(false);
        this.isAuthenticated = false;
        this.afAuth.auth.signOut();
        this.router.navigate(['/welcome']);

    }

    isAuth() {
       return this.isAuthenticated || this.googleorfacebookAuthState;  // return false if the user is not signed in

    }

private authSuccesfully () {
    this.authChange.next(true);
    this.isAuthenticated = true;
    this.router.navigate(['/requestinput']);
}

}
