import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-key-features',
    imports: [NgClass, NgIf],
    templateUrl: './key-features.component.html',
    styleUrl: './key-features.component.scss'
})
export class KeyFeaturesComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}