import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { PopularCountriesComponent } from '../../common/popular-countries/popular-countries.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';

@Component({
    selector: 'app-personal-page',
    imports: [PageBannerComponent, MoneyTransferComponent, PopularCountriesComponent],
    templateUrl: './personal-page.component.html',
    styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent {}