import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-grow-your-business',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './grow-your-business.component.html',
    styleUrl: './grow-your-business.component.scss'
})
export class GrowYourBusinessComponent {}