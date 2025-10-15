import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './funfacts.component.html',
    styleUrl: './funfacts.component.scss'
})
export class FunfactsComponent {}