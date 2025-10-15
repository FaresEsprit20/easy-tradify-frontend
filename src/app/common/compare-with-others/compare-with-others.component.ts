import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compare-with-others',
    imports: [NgClass],
    templateUrl: './compare-with-others.component.html',
    styleUrl: './compare-with-others.component.scss'
})
export class CompareWithOthersComponent {

    constructor(
        public router: Router
    ) {}

}