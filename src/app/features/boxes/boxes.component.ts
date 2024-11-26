import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ss-boxes',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent {}
