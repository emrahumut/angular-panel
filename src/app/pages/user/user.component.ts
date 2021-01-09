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
        { name: "test name", username: 'Hydrogen', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Helium', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Lithium', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Beryllium', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Boron', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Carbon', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Nitrogen', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Oxygen', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'TEST', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'FTESTluorine', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'FluoTESTrine', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'FluoriTESTne', email: "TEST", company: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
    ];

    columnData = [
        { title: 'Name', column: 'name' },
        { title: 'Username', column: 'username' },
        { title: 'E-mail', column: 'email' },
        { title: 'City', column: 'city' },
        { title: 'Todos Count', column: 'todosCount' },
    ];

    constructor() { }

    ngOnInit() { }
}