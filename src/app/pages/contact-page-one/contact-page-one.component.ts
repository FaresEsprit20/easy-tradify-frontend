import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';

@Component({
    selector: 'app-contact-page-one',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PageBannerComponent, CtaComponent],
    templateUrl: './contact-page-one.component.html',
    styleUrl: './contact-page-one.component.scss'
})
export class ContactPageOneComponent {}