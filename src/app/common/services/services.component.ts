import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-services',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {}