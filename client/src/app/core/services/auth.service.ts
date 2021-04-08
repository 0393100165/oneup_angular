import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { getFirebaseBackend } from '../../authUtils';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/auth.models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    private AUTH_API = 'http://localhost:8085/user';
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private router: Router, private http: HttpClient) {}

    public currentUser(): User {
        return getFirebaseBackend().getAuthenticatedUser();
    }
    
    login(email: string, password: string) {
        return getFirebaseBackend().loginUser(email, password).then((response: any) => {
            const user = response;
            return user;
        });
    }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    // register(email: string, password: string) {
    //     return getFirebaseBackend().registerUser(email, password).then((response: any) => {
    //         const user = response;
    //         return user;
    //     });
    // }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return getFirebaseBackend().forgetPassword(email).then((response: any) => {
            const message = response.data;
            return message;
        });
    }

    /**
     * Logout the user
     */
    logout() {
        // logout the user
        getFirebaseBackend().logout();
    }
}

