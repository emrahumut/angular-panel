import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { UserModel } from '../shared/models/user.model';

@Injectable({ providedIn: 'root' })

export class UsersService {

    controller = {
        name: 'users',
        url: [environment.API_URL,'users'].join('/')
    };

    constructor(
        private http: HttpClient
    ) { }

    newUser() {

    }
    getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.controller.url);
    }

    updateUser() {

    }

    deleteUser() {

    }


}