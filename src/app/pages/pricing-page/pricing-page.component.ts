import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CompareWithOthersComponent } from '../../common/compare-with-others/compare-with-others.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing-page',
    standalone: true,
    imports: [PageBannerComponent, CompareWithOthersComponent, CtaComponent],
    templateUrl: './pricing-page.component.html',
    styleUrl: './pricing-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PricingPageComponent {}