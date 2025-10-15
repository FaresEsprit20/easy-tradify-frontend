import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-ratings-reviews',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './ratings-reviews.component.html',
    styleUrl: './ratings-reviews.component.scss'
})
export class RatingsReviewsComponent {}