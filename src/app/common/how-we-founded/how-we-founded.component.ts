import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-how-we-founded',
    imports: [NgIf],
    templateUrl: './how-we-founded.component.html',
    styleUrl: './how-we-founded.component.scss'
})
export class HowWeFoundedComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}