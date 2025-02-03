import { inject, Injectable } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '@/app/core/interfaces/paginated-response.model';
import { IBoxView } from './interfaces/ibox-view';
import { IBoxesFiltersRequest } from './interfaces/ibox-filter-request';

@Injectable({
  providedIn: 'root',
})
export class MyBoxesFacade {
  private _boxService = inject(BoxService);

  public getBoxes(request: IBoxesFiltersRequest): Observable<PaginatedResponse<IBoxView>> {
    return this._boxService.getBoxes(request);
  }
}
