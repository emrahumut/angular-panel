import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    
]

@NgModule({
    declarations: [
        PostComponent,
        TodoComponent,
        UserComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserModule,
        CommonModule,
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }
