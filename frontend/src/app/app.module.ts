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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RequestinputComponent,
    ShowresponceComponent,
    MakecomplaintComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
