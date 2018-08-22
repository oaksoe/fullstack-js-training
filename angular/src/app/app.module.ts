import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

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
      MatButtonModule,
      MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
