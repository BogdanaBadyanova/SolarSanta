import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BoxCardComponent } from '../box-card/box-card.component';
import { PaginatedResponse } from '@/app/core/interfaces/paginated-response.model';
import { IBoxView } from '../../interfaces/ibox-view';

@Component({
  selector: 'ss-boxes-list',
  standalone: true,
  imports: [BoxCardComponent],
  templateUrl: './boxes-list.component.html',
  styleUrl: './boxes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesListComponent {
  public boxes = input.required<PaginatedResponse<IBoxView>>();
}
