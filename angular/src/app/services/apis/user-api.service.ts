import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { User } from '../../models';
 
@Injectable()
export class UserApiService {
    constructor(private http: HttpService<any>) {
    }
 
    public createUser(user: User): Observable<any> {
        return this.http.post('/users/create', user)
            .map((result: any) => {
                return result;
            }).catch(err => Observable.throw(err));
    }

    public updateUser(user: User): Observable<any> {
        return this.http.put('/users/', user)
            .map((result: any) => {
                return result;
            }).catch(err => Observable.throw(err));
    }

    public removeUser(username: string): Observable<any> {
        return this.http.delete('/users/' + encodeURIComponent(username))
            .map((result: any) => {
                return result;
            }).catch(err => Observable.throw(err));
    }

    public getAllUsers(): Observable<any> {
        return this.http.get('/users/')
            .map((result: any) => {
                const data = result.data;
                return result;
            }).catch(err => Observable.throw(err));
    }

    public getUser(username: string): Observable<any> {
        return this.http.get('/users/' + encodeURIComponent(username))
            .map((result: any) => {
                const data = result.data;
                return result;
            }).catch(err => Observable.throw(err));
    }
}
