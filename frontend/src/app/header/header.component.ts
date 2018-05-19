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
  killAuthSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.killAuthSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth =  authStatus;
    });
  }

  ngOnDestroy(): void {
    this.killAuthSubscription.unsubscribe();
  }
}
