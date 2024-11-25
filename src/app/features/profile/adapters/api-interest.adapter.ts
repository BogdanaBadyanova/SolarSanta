import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiInterest } from '@/app/infrastructure';

import { Injectable } from '@angular/core';
import { IInterest } from '../interfaces/iinterest';

@Injectable({
  providedIn: 'root',
})
export class ApiInterestAdapters extends AbstractApiResponseAdapter<ApiInterest, IInterest> {
  public override fromApi(apiModel: ApiInterest): IInterest {
    return {
      id: apiModel.id || 0,
      title: apiModel.title || '',
      userId: apiModel.userId || '',
    };
  }
}
