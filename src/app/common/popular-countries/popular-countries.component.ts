import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-popular-countries',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './popular-countries.component.html',
    styleUrl: './popular-countries.component.scss'
})
export class PopularCountriesComponent {}