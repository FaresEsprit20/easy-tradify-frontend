import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-team',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss'
})
export class TeamComponent {}