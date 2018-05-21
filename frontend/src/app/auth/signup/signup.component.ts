import { UIService } from './../../shared/ui-features.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  killErrorMessageSubscription: Subscription;
  errorMessage = null;

  public isLoading = false;
  private killLoadingSubscription: Subscription;
  constructor(private authService: AuthService, private uIService: UIService) { }

  ngOnInit() {
    this.killErrorMessageSubscription = this.authService.errorMessage.subscribe(Response => {
      this.errorMessage = Response;
    });

    this.killLoadingSubscription = this.uIService.loadingStateChanged.subscribe(loading => {
      this.isLoading = loading;
    });

  }

  ngOnDestroy() {
    this.killLoadingSubscription.unsubscribe();
    this.killErrorMessageSubscription.unsubscribe();
  }

  onSignUp(form: NgForm) {

this.authService.registerUser({email: form.value.email, password: form.value.password});

  }

}
