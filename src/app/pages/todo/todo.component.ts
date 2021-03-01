import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
import { ColumnDataModel } from 'src/app/shared/models/table.model';
import { TodoModel } from 'src/app/shared/models/todo.model';


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
    // dataSource: TodoModel[] = [
    //     { username: 'Hydrogen', title: 'TODO TITLE TEST', completed: true },
    //     { username: 'TEST TODO', title: 'TODO TITLE TEST22', completed: false },
    //     { username: 'TEST TODO22', title: 'TODO TITLE TEST2222', completed: true },
    //     { username: 'TEST TODO22', title: 'TODO TITLE TEST2222', completed: true },
    //     { username: 'TEST TODO22', title: 'TODO TITLE TEST2222', completed: true }

    // ];

    dataSource: any;

    columnData: ColumnDataModel[] = [
        { title: 'Username', column: 'username' },
        { title: 'Title', column: 'title' },
        { title: 'Completed', column: 'completed' }
    ];

    displayedColumns: string[] = this.columnData.map(col => col.column);

    constructor(
        private todosService: TodosService
    ) { }

    ngOnInit() {
        this.todosService.getTodos()
            .subscribe(todos => {
                console.log(todos);
                this.dataSource = todos;
            })
    }
}