import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-testimonials',
    imports: [NgClass, NgIf],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}