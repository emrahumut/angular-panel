import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { PostComponent } from '../pages/post/post.component';
import { TodoComponent } from '../pages/todo/todo.component';
import { UserComponent } from '../pages/user/user.component';
import { SharedModule } from '../shared/components/shared.module';
import { DefaultLayoutComponent } from './default/default-layout.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const routes: Routes = [

    { path: '', redirectTo: '/user', pathMatch: 'full' },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [

            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'todo',
                component: TodoComponent
            },
            {
                path: 'post',
                component: PostComponent
            }

        ]
    }
]

@NgModule({
    declarations: [
        DefaultLayoutComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserModule,
        CommonModule,
        PagesModule,
        FlexLayoutModule,
        SharedModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatCheckboxModule,
        FormsModule
    ],
    exports: [
        DefaultLayoutComponent,
        RouterModule
    ],
    providers: [],
})
export class LayoutModule { }
