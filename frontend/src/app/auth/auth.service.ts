import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
authChange = new Subject <boolean>();
    private user: User;

    constructor (private router: Router) {}

    registerUser (authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
        this.authSuccesfully();
    }


    login (authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };

        this.authSuccesfully();
    }


    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }


    getUser() {
        return { ... this.user};
    }

    isAuth() {
       return this.user != null;  // return false if the user is not signed in
    }

private authSuccesfully () {
    this.authChange.next(true);
    this.router.navigate(['/requestinput']);
}

}
