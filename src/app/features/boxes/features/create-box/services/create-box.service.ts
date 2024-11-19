import { ICreateBox } from '@/app/core/interfaces/create-box';
import { inject, Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { ApiCreateBoxRequestAdapter } from '../adapters/api-create-box-request.adapter';
import { BoxesApiService } from '@/app/infrastructure';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class CreateBoxService {
  private _apiCreateBoxRequestAdapter = inject(ApiCreateBoxRequestAdapter);
  private _boxesApiService = inject(BoxesApiService)
  
  public createBox(request: ICreateBox): Observable<unknown> {
   const dto = this._apiCreateBoxRequestAdapter.toApi(request)
    return this._boxesApiService.apiBoxesPost$Plain$Response({ body: dto})

  }

}
