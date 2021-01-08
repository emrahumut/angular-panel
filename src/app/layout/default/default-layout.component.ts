import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'default-layout',
    templateUrl: 'default-layout.component.html'
})

export class DefaultLayoutComponent implements OnInit {
    title = 'Panel App';
    opened: boolean = true;
    constructor() { }

    ngOnInit() { }
}