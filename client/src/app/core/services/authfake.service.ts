import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/auth.models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthfakeauthenticationService {

    private AUTH_API = 'http://localhost:8085/user';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private userSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    
    private reqHeader = new HttpHeaders({'Conten-Type': 'application/x-www-form-urlencoded','No-Auth':'True'});

    login(username: string, password: string) {
        return this.http.post<User>(`${this.AUTH_API}/login`, {username, password }, {headers: this.reqHeader})
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log('hello');
            console.log(localStorage.length);
            return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }
    register(user: User) {
        console.log('hello');
        console.log(user);
        return this.http.post(`${this.AUTH_API}/register`, user,{headers: this.reqHeader})
    }
}
