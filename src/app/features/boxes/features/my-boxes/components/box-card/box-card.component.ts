import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IBoxView } from '../../interfaces/ibox-view';
import { ButtonModule } from 'primeng/button';
import { DateFormatPipe } from '@/app/core/pipe/date-format.pipe';
import { RouterLink } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';

@Component({
  selector: 'ss-box-card',
  standalone: true,
  imports: [CardModule, ButtonModule, DateFormatPipe, RouterLink],
  templateUrl: './box-card.component.html',
  styleUrl: './box-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxCardComponent {
  public box = input.required<IBoxView>();
  public readonly Urls = Urls;
}
