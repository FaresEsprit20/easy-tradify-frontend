import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-money-transfer',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf],
    templateUrl: './money-transfer.component.html',
    styleUrl: './money-transfer.component.scss'
})
export class MoneyTransferComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}