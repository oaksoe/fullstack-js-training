import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models';

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

    public loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
    }

    public ngOnInit() {
        this.initLoginForm();
    }

    public onLoginClick() {
        this.loginClick.emit();
    }

    public goToSignup() {
        this.toggleAuthClick.emit(false);
    }

    private initLoginForm() {
        this.loginForm = this.formBuilder.group({
            emailControl: ['', [Validators.required]],
            passwordControl: ['', [Validators.required]]
        });
    }
}


