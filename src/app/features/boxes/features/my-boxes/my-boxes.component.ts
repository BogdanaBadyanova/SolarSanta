import { ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal } from '@angular/core';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';
import { IBoxesFilters } from './interfaces/iboxes-filters';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatedResponse } from '@/app/core/interfaces/paginated-response.model';
import { IBoxView } from './interfaces/ibox-view';
import { MyBoxesFacade } from './my-boxes.facade';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IBoxesFiltersRequest } from './interfaces/ibox-filter-request';
import { ButtonModule } from 'primeng/button';
import { Urls } from '@/app/core/utils/urls';
import { RouterLink } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'ss-my-boxes',
  standalone: true,
  imports: [BoxesListComponent, FilterComponent, ButtonModule, RouterLink],
  templateUrl: './my-boxes.component.html',
  styleUrl: './my-boxes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBoxesComponent implements OnInit {
  private _facade = inject(MyBoxesFacade);

  private _request: IBoxesFiltersRequest = {
    name: null,
    page: 1,
    size: 10,
  };
  public boxes: Signal<PaginatedResponse<IBoxView>>;

  public readonly Urls = Urls;

  public ngOnInit(): void {
    this._getBoxes(this._request);
  }

  public filtersChange(filter: IBoxesFilters): void {
    const { name } = filter;

    this._request.name = name;
    this._getBoxes(this._request);
  }

  private _getBoxes(request: IBoxesFiltersRequest): void {
    this._facade
      .getBoxes(request)
      .pipe(
        tap((data) => (this.boxes = signal(data))),
        untilDestroyed(this),
      )
      .subscribe();
  }
}
