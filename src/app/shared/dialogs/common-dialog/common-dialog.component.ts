import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
    selector: 'common-dialog',
    templateUrl: 'common-dialog.component.html'
})

export class CommonDialog implements OnInit {


    constructor(
        private dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        console.log(this.data);
    }
}