import { Subscription } from 'rxjs';
import { UIService } from './../../shared/ui-features.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService, private uIService: UIService) { }
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

  ngOnDestroy() {
    this.killLoadingSubscription.unsubscribe();
    this.killErrorMessageSubscription.unsubscribe();
  }

  onLogin(form: NgForm) {
    this.authService.login({ email: form.value.email, password: form.value.password });
  }


}
