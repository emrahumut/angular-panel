import { Component, OnInit } from '@angular/core';
import { UserModel, UserTableModel } from 'src/app/shared/models/user.model';

export interface PeriodicElement {
    name: string;
    username: number;
    weight: number;
    symbol: string;
}



@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    dataSource = [

        // { position: 1, name: "asdadasda", weight: 1.0079, symbol: 'H' },
        // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { name: "test name", username: 'Hydrogen', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Helium', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Lithium', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Beryllium', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Boron', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Carbon', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Nitrogen', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Oxygen', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Fluorine', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'Fluorine', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'Fluorine', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'Fluorine', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },

    ];

    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    displayedColumns = ["name", "username", "email", "company", "city", "Todos Count"];

    constructor() { }

    ngOnInit() { }
}