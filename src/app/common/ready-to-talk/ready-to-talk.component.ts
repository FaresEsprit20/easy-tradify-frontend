import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ready-to-talk',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    templateUrl: './ready-to-talk.component.html',
    styleUrl: './ready-to-talk.component.scss'
})
export class ReadyToTalkComponent {}