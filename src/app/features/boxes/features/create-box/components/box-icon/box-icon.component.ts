import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'ss-box-icon',
  standalone: true,
  imports: [ImageModule, NgClass],
  templateUrl: './box-icon.component.html',
  styleUrl: './box-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxIconComponent {
  public type = input.required<BoxLogoEnum>();
  public selected = input<boolean>(false);
}
