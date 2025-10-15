import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-easy-payment',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    templateUrl: './easy-payment.component.html',
    styleUrl: './easy-payment.component.scss'
})
export class EasyPaymentComponent {}