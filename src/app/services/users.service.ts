import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { TodoRequestModel } from '../shared/models/todo.model';
import { UserModel, UserRequestModel } from '../shared/models/user.model';

@Injectable({ providedIn: 'root' })

export class UsersService {

    controller = {
        name: 'users',
        url: [environment.API_URL, 'users'].join('/')
    };
    userData: any = [];

    constructor(
        private http: HttpClient
    ) { }

    newUser() {

    }

    getUsers(): Observable<UserRequestModel[]> {
        return this.http.get<UserRequestModel[]>(this.controller.url)

    }



    commonUserData(): Observable<any> {
        return this.http.get<UserRequestModel[]>(this.controller.url)
            .pipe(
                map(users => {
                    users.forEach(user => {
                        this.userData.push({
                            username: user.username,
                            userId: user.id
                        });
                    });
                    
                    return users;
                })
            )

    }

    updateUser() {

    }

    deleteUser() {

    }
}