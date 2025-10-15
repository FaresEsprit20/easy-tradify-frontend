import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-flexibility',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './flexibility.component.html',
    styleUrl: './flexibility.component.scss'
})
export class FlexibilityComponent {}