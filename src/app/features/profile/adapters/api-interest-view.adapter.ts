import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiInterestView } from '@/app/infrastructure';

import { Injectable } from '@angular/core';
import { IInterestView } from '../interfaces/iinterest-view';

@Injectable({
  providedIn: 'root',
})
export class ApiInterestViewAdapter extends AbstractApiResponseAdapter<
  ApiInterestView,
  IInterestView
> {
  public override fromApi(apiModel: ApiInterestView): IInterestView {
    return {
      id: apiModel.id || 0,
      title: apiModel.title || '',
    };
  }
}
