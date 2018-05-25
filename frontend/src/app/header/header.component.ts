import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  isAdminAuth = false;
  killAuthSubscription: Subscription;
  killAdminAuthSubscription: Subscription;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.killAuthSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth =  authStatus;
    });

    this.killAdminAuthSubscription = this.authService.authAdminChange.subscribe(authAdminStatus => {
      this.isAdminAuth =  authAdminStatus;
    });
  }

  ngOnDestroy(): void {
    this.killAuthSubscription.unsubscribe();
    this.killAdminAuthSubscription.unsubscribe();
  }
}
