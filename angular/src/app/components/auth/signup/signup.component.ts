import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models';
import { ValidatorService, LocationService, AuthService } from '../../../services';

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

    public signupForm: FormGroup;
    public countryList = [];
    public cityList = [];
    
    constructor(
        private formBuilder: FormBuilder,
        private validatorService: ValidatorService,
        private locationService: LocationService,
        private authService: AuthService
    ) {
    }

    public ngOnInit() {
        this.initSignupForm();
    }

    public onSignupClick() {
        this.authService.signup(this.user)
            .subscribe(user => {
                if(user) {
                    this.signupClick.emit();
                }
            }, err => { 
                console.log('Error');
            });
    }

    public goToLogin() {
        this.toggleAuthClick.emit(true);
    }

    public onCountrySelected() {
        this.cityList = this.locationService.getCityList(this.user.country);
    }

    private initSignupForm() {
        this.countryList = this.locationService.getCountryList();
        this.cityList = this.locationService.getCityList(this.countryList[0]);

        this.signupForm = this.formBuilder.group({
            emailControl: ['', [Validators.required, Validators.email]],
            passwordControl: ['', [Validators.required, this.validatorService.validatePasswordStrength]],
            passwordControl2: ['', [Validators.required, (control: FormControl) => {
                return this.validatorService.validatePasswordMatch(control, this.user.password);
            }]],
            fullNameControl: ['', [Validators.required]],
            dobControl: ['', [Validators.required, this.validatorService.validateDOB]],
            addressControl: ['', [Validators.required]],
            phoneControl: ['', [Validators.required, this.validatorService.validatePhone]],
        });

        this.signupForm.controls.passwordControl.valueChanges
            .subscribe(() => {
                this.signupForm.controls.passwordControl2.updateValueAndValidity();
            });
    }
}
