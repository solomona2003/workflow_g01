import { MakecomplaintComponent } from './makecomplaint/makecomplaint.component';
import { ShowresponceComponent } from './showresponce/showresponce.component';
import { RequestinputComponent } from './requestinput/requestinput.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'requestinput', component: RequestinputComponent},
  {path: 'showresponce', component: ShowresponceComponent},
  {path: 'makecomplaint', component: MakecomplaintComponent},

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
