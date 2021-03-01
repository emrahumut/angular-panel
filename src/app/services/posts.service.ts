import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { PostModel } from '../shared/models/post.model';

@Injectable({ providedIn: 'root' })

export class PostsService {

    controller = {
        name: 'posts',
        url: [environment.API_URL, 'posts'].join('/')
    };
    constructor(
        private http: HttpClient,
    ) { }

    newUser() {

    }
    getPosts(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>(this.controller.url);
    }

    updateUser() {

    }

    deleteUser() {

    }
}