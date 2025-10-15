import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-error-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {}