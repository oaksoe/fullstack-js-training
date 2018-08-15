import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User;

    constructor() {
        this.user = {
            username: 'mgmg123',
            password:  '******',
            fullName: 'Mg Mg',
            address: 'Yangon'
        };         
    }

    ngOnInit() {
    }
}


