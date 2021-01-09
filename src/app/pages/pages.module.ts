import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/components/shared.module';
import { CommonTableComponent } from '../shared/components/common-table/common-table.component';

const routes: Routes = [

]

@NgModule({
    declarations: [
        PostComponent,
        TodoComponent,
        UserComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserModule,
        CommonModule,
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
    ],
    exports: [
        PostComponent,
        TodoComponent,
        UserComponent,
    ],
    providers: [],
})
export class PagesModule { }
