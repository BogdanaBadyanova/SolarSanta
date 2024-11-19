import { ICreateBox } from '@/app/core/interfaces/create-box';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCreateBoxRequestAdapter } from '../features/create-box/adapters/api-create-box-request.adapter';
import { BoxesApiService } from '@/app/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private _apiCreateBoxRequestAdapter = inject(ApiCreateBoxRequestAdapter);
  private _boxesApiService = inject(BoxesApiService);

  public createBox(request: ICreateBox): Observable<unknown> {
    const dto = this._apiCreateBoxRequestAdapter.toApi(request);
    return this._boxesApiService.apiBoxesPost({ body: dto });
  }
}
