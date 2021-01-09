import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { TodoModel } from '../shared/models/todo.model';

@Injectable({providedIn: 'root'})
export class TodosService {

    controller = {
        name: 'todos',
        url: [environment.API_URL,'todos'].join('/')
    };

    constructor(
        private http: HttpClient,
    ) { }
    
    newUser() {

    }
    getUsers(): Observable<TodoModel[]> {
        return this.http.get<TodoModel[]>(this.controller.url);
    }

    updateUser() {

    }

    deleteUser() {

    }
}