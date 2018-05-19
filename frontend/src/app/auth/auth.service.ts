import { AuthData } from './auth-data.model';
import { User } from './user.model';

export class AuthService {

    private user: User;

    registeredUser (authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
    }


    login (authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
    }

    logout() {
        this.user = null;
    }


    getUser() {
        return { ... this.user};
    }

    isAuth() {
       return this.user != null;  // return false if the user is not signed in
    }
}
