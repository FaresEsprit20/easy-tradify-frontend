import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { InvestorsComponent } from '../../common/investors/investors.component';
import { TeamComponent } from './team/team.component';
import { PopularCountriesComponent } from '../../common/popular-countries/popular-countries.component';
import { WhyChooseKlobComponent } from '../../common/why-choose-klob/why-choose-klob.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'app-about-page-two',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PageBannerComponent, AboutComponent, FunfactsComponent, WhyChooseKlobComponent, PopularCountriesComponent, TeamComponent, InvestorsComponent],
    templateUrl: './about-page-two.component.html',
    styleUrl: './about-page-two.component.scss'
})
export class AboutPageTwoComponent {}