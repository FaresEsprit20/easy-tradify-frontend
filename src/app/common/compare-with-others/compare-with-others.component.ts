import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compare-with-others',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass],
    templateUrl: './compare-with-others.component.html',
    styleUrl: './compare-with-others.component.scss'
})
export class CompareWithOthersComponent {

    constructor(
        public router: Router
    ) {}

}