import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialog } from '../../dialogs/common-dialog/common-dialog.component';
import { ColumnDataModel } from '../../models/table.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
    selector: 'common-table',
    templateUrl: 'common-table.component.html'
})


export class CommonTableComponent implements OnInit, OnDestroy {

    @Input() columnData: ColumnDataModel[];
    @Input() dataSource: any;

    displayedColumns: string[];
    subscription: Subscription;
    usernameId: any;
    animal: string;
    name: string;


    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private dialog: MatDialog,
        private userService: UsersService
    ) {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit() {
        this.displayedColumns = this.columnData.map(col => col.column);
        this.subscription = this.userService.commonUserData().subscribe(data => {
            console.log(data);
        })
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(CommonDialog,
            {
                width: '450px',
                data: { name: this.displayedColumns, animal: this.animal }
            });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}