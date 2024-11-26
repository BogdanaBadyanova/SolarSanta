import { ICreateBox } from '@/app/features/boxes/features/create-box/interfaces/create-box';
import { inject, Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { ApiCreateBoxRequestAdapter } from '../features/create-box/adapters/api-create-box-request.adapter';
import { ApiBoxDetail, BoxesApiService } from '@/app/infrastructure';
import { IBoxDetails } from '../features/box-details/interfaces/detail-box';
import { ApiBoxDetailAdapter } from '../features/box-details/adapters/api-box-detail.adapter';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private _apiCreateBoxRequestAdapter = inject(ApiCreateBoxRequestAdapter);
  private _apiBoxDetailAdapter = inject(ApiBoxDetailAdapter);
  private _boxesApiService = inject(BoxesApiService);

  public createBox(request: ICreateBox): Observable<unknown> {
    const dto = this._apiCreateBoxRequestAdapter.toApi(request);
    return this._boxesApiService.apiBoxesPost({ body: dto }).pipe(first());
  }

  public deleteBox(id: string): Observable<string> {
    return this._boxesApiService.apiBoxesIdDelete({ id }).pipe(first());
  }

  public getBoxData(id: string): Observable<IBoxDetails> {
    return this._boxesApiService.apiBoxesIdGet({ id }).pipe(
      first(),
      map((response: ApiBoxDetail) => this._apiBoxDetailAdapter.fromApi(response)),
    );
  }
}
