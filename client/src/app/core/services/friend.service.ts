import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from '../models/friend.models';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class FriendService {

    private AUTH_API = 'http://localhost:8085/friend';
    constructor(private http: HttpClient) {
    }
    
    private reqHeader = new HttpHeaders({'Conten-Type': 'application/x-www-form-urlencoded','No-Auth':'True'});

    addfriend(friend: Friend) {
        console.log(friend);
        return this.http.post(`${this.AUTH_API}/addFriend`, friend, {headers: this.reqHeader})
    }
}
