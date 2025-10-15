import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-how-it-works',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './how-it-works.component.html',
    styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {}