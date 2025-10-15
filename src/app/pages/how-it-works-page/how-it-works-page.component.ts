import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';
import { RatingsReviewsComponent } from '../../common/ratings-reviews/ratings-reviews.component';

@Component({
    selector: 'app-how-it-works-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PageBannerComponent, HowItWorksComponent, MoneyTransferComponent, RatingsReviewsComponent],
    templateUrl: './how-it-works-page.component.html',
    styleUrl: './how-it-works-page.component.scss'
})
export class HowItWorksPageComponent {}