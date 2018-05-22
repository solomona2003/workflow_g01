import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription, Observable } from 'rxjs';
import { UIService } from './../../shared/ui-features.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private user: Observable<firebase.User>;

  constructor(private authService: AuthService, private uIService: UIService, private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  errorMessage = null;
  public isLoading = false;
  private killLoadingSubscription: Subscription;
  killErrorMessageSubscription: Subscription;
  isAuth: boolean;
  ngOnInit() {
    this.killLoadingSubscription = this.uIService.loadingStateChanged.subscribe(loading => {
      this.isLoading = loading;
    });



    this.killErrorMessageSubscription = this.authService.errorMessage.subscribe(Response => {
      this.errorMessage = Response;
    });
  }


  signInWithGoogle() {
    this.authService.googleLogin();
  }

  signInWithFacebook() {
    this.authService.facebookLogin();
  }



  ngOnDestroy() {
    this.killLoadingSubscription.unsubscribe();
    this.killErrorMessageSubscription.unsubscribe();
  }

  onLogin(form: NgForm) {
    this.authService.login({ email: form.value.email, password: form.value.password });
  }


}
