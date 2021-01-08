import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

    @Input() isExpand: boolean;
    @Output() opened = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    expand() {
        this.opened.emit(!this.isExpand);
    }
}