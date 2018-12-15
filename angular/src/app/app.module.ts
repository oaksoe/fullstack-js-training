import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { 
    LoginComponent,
    SignupComponent 
} from './components';
import {
    ValidatorService,
    LocationService,
    HttpService,
    AuthService,
    UserApiService
} from './services';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
    ],
    providers: [
        ValidatorService,
        LocationService,
        HttpService,
        AuthService,
        UserApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
