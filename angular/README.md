Using Angular Materials
=======================
https://material.angular.io/guide/getting-started

npm install @angular/materials @angular/cdk @angular/animations --save

# Import these modules in app.module.ts
BrowserAnimationsModule, ReactiveFormsModule, MatInputModule, MatButtonModule

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatInputModule,
    MatButtonModule
    // more material components here
} from '@angular/material';

imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatButtonModule
  ]

# For theme, in styles.css,
@import "~@angular/material/prebuilt-themes/indigo-pink.css";


Using Angular Material Design Icons
===================================

http://google.github.io/material-design-icons/ 
https://material.io/icons/

