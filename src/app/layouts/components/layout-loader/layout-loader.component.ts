import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'ss-layout-loader',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './layout-loader.component.html',
  styleUrl: './layout-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLoaderComponent {}
