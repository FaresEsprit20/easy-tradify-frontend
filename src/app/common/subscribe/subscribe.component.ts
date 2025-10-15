import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-subscribe',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './subscribe.component.html',
    styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {}