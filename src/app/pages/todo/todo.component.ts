import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
    username: string;
    title: string;
    completed: boolean;
}



@Component({
    selector: 'app-todo',
    templateUrl: 'todo.component.html'
})

export class TodoComponent implements OnInit {
    dataSource = [
        {username: 'Hydrogen', title: 'TODO TITLE TEST', completed: true},
        {username: 'TEST TODO', title: 'TODO TITLE TEST22', completed: false},
        {username: 'TEST TODO22', title: 'TODO TITLE TEST2222', completed: true},
        {username: 'TEST TODO22', title: 'TODO TITLE TEST2222', completed: true},
        {username: 'TEST TODO22', title: 'TODO TITLE TEST2222', completed: true}
    
    ];

    displayedColumns: string[] = ['username', 'title', 'completed'];

    constructor() { }

    ngOnInit() { }
}