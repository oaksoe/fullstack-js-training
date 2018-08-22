import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input()
    public user: User;

    @Output() 
    public loginClick = new EventEmitter();

    @Output() 
    public toggleAuthClick = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    onLoginClick() {
        this.loginClick.emit();
    }

    goToSignup() {
        this.toggleAuthClick.emit(false);
    }
}


