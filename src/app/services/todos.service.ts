import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { TodoModel, TodoRequestModel } from '../shared/models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodosService {

    todosCount: Subject<Object> = new Subject<Object>();

    controller = {
        name: 'todos',
        url: [environment.API_URL, 'todos'].join('/')
    };

    constructor(
        private http: HttpClient,
    ) { }

    newUser() {

    }

    getTodos(): Observable<TodoRequestModel[]> {
        return this.http.get<TodoRequestModel[]>(this.controller.url)
    }

    getTodosCount(): Observable<Object> {
        return this.http.get<TodoRequestModel[]>(this.controller.url)
            .pipe(
                map(todos => {
                    todos.forEach(todo => {
                        if (this.todosCount[todo.userId]) {
                            this.todosCount[todo.userId] += 1;
                        }
                        else {
                            this.todosCount[todo.userId] = 1;
                        }
                    });
                    return this.todosCount;
                })
            )
    }

    updateUser() {

    }

    deleteUser() {

    }
}