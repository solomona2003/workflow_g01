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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
