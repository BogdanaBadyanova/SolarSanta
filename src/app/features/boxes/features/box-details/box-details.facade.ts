import { inject, Injectable } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Observable } from 'rxjs';
import { IBoxDetails } from './interfaces/detail-box';

@Injectable({
  providedIn: 'root',
})
export class BoxDetailsFacade {
  private _boxService = inject(BoxService);

  public getBoxData(id: string): Observable<IBoxDetails> {
    return this._boxService.getBoxData(id);
  }
}
