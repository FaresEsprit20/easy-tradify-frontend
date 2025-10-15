import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';

@Component({
    selector: 'app-team-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PageBannerComponent, CtaComponent],
    templateUrl: './team-page.component.html',
    styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {}