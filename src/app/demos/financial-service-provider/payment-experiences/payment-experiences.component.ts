import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-payment-experiences',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    templateUrl: './payment-experiences.component.html',
    styleUrl: './payment-experiences.component.scss'
})
export class PaymentExperiencesComponent {}