import { DropdownDirective } from './admin/dropdown.directive';
import { UIService } from './shared/ui-features.service';
import { ComplaintService } from './makecomplaint/complaint.service';
import { DataService } from './requestinput/data.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RequestinputComponent } from './requestinput/requestinput.component';
import { ShowresponceComponent } from './showresponce/showresponce.component';
import { MakecomplaintComponent } from './makecomplaint/makecomplaint.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';


import { environment } from '../environments/environment.prod';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AdminComponent } from './admin/admin.component'; // for firebase hosting
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RequestinputComponent,
    ShowresponceComponent,
    MakecomplaintComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    AdminComponent,
    DropdownDirective,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [AuthService, DataService, ComplaintService, UIService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
