import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ss-santa-info',
  standalone: true,
  imports: [SvgIconComponent, ButtonModule],
  templateUrl: './santa-info.component.html',
  styleUrl: './santa-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SantaInfoComponent {}
