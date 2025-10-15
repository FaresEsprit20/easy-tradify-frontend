import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-download-app',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './download-app.component.html',
    styleUrl: './download-app.component.scss'
})
export class DownloadAppComponent {}