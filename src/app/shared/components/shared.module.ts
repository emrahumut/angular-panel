import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonTableComponent } from './common-table/common-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonDialog } from '../dialogs/common-dialog/common-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from 'src/app/services/users.service';
import { TodosService } from 'src/app/services/todos.service';
import { PostsService } from 'src/app/services/posts.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        HeaderComponent,
        CommonTableComponent,
        CommonDialog
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatPaginatorModule
    ],
    exports: [
        HeaderComponent,
        CommonTableComponent,
        CommonDialog

    ],
    providers: [
        UsersService,
        TodosService,
        PostsService
    ],
})
export class SharedModule { }
