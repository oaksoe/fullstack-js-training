import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models';
import { AuthService } from '../../../services';

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
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
    }

    public ngOnInit() {
        this.initLoginForm();
    }

    public onLoginClick() {
        this.authService.login(this.user.email, this.user.password)
            .subscribe(user => {
                if(user) {
                    this.user = user;
                    this.loginClick.emit();
                }
            }, err => { 
                console.log('Error');
            });
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
