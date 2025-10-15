import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-reviews',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './reviews.component.html',
    styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {}