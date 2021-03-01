import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ColumnDataModel } from 'src/app/shared/models/table.model';
import { UserModel, UserTableModel } from 'src/app/shared/models/user.model';
import { filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';

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

    userTable: UserModel[] = [
        { name: "test name", username: 'Hydrogen', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Helium', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Lithium', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Beryllium', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Boron', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Carbon', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Nitrogen', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'Oxygen', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 63 },
        { name: "test name", username: 'TEST', email: "TEST", companyName: "TEST compane NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'FTESTluorine', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'FluoTESTrine', email: "TEST", companyName: "TEST company NAME", city: "test City", todosCount: 6312321 },
        { name: "test name", username: 'FluoriTESTne', email: "TEST", companyName: "TEST COMPANY NAME", city: "test City", todosCount: 6312321 },
    ];

    // dataSource;

    columnData: ColumnDataModel[] = [
        { title: 'Name', column: 'name' },
        { title: 'Username', column: 'username' },
        { title: 'E-mail', column: 'email' },
        { title: 'Company Name', column: 'companyName' },
        { title: 'City', column: 'city' },
        { title: 'Todos Count', column: 'todosCount' },
    ];

    // usersModal = {
    //     column: [
    //         { title: 'Name', column: 'name' },
    //         { title: 'Username', column: 'username' },
    //         { title: 'E-mail', column: 'email' },
    //         { title: 'Company Name', column: 'companyName' },
    //         { title: 'City', column: 'city' },
    //         { title: 'Todos Count', column: 'todosCount' },
    //     ],
    //     buttonTitle: "Create User",
    // }

    displayedColumns = this.columnData.map(col => col.column);

    idNames: Subject<any> = new Subject<any>();

    constructor(
        private usersService: UsersService,
        private todosService: TodosService
    ) { }

    ngOnInit() {
        this.usersService.getUsers()
            .pipe(
                map(data => data.filter(x => {
                    x['city'] = x.address.city;
                    x['companyName'] = x.company.name;
                    return x;
                })),
            )
            .subscribe(users => {
                // this.usersService.cachedUsers = users;
                console.log(users);
                // this.dataSource = users;
            });


            console.log(this.displayedColumns)
    }





    // users modal

    // button info
    // modal button info
    // inputs/ 
    //  city array
    // zip code array bir şehir seçilirse zip codu otomatik doldurulur.

    // todos modal 

    // button information
    // modal button info
    // select user AUTOCOMPLETE OLCAK elimizdeli userslar olcak

}