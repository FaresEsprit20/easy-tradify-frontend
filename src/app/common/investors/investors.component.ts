import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-investors',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './investors.component.html',
    styleUrl: './investors.component.scss'
})
export class InvestorsComponent {}