import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    @Input()
    public user: User;

    @Output() 
    public signupClick = new EventEmitter();

    @Output() 
    public toggleAuthClick = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    onSignupClick() {
        this.signupClick.emit();
    }

    goToLogin() {
        this.toggleAuthClick.emit(true);
    }
}
