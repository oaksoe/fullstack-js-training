import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public user: User;
    public showLoginPage: boolean;

    constructor() {
        this.user = new User();
        this.showLoginPage = true;
    }

    public onLoginSuccess() {
        console.log(this.user);
    }

    public onSignupSuccess() {
        console.log(this.user);
    }

    public toggleAuth(toggleLogin) {
        this.showLoginPage = toggleLogin;
    }
}
