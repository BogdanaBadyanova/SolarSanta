import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { IBoxesFilters } from '../../interfaces/iboxes-filters';

@Component({
  selector: 'ss-filter',
  standalone: true,
  imports: [InputTextModule, InputGroupModule, ButtonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  public name: string;

  public filtersChange = output<IBoxesFilters>();

  public changeFilters(): void {
    this.name = this.name?.trim();

    const filters: IBoxesFilters = {
      name: this.name,
    };

    this.filtersChange.emit(filters);
  }
}
