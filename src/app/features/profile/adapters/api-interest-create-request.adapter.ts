import { AbstractApiRequestAdapter } from '@/app/core/adapters/abstract-api-request.adapter';
import { ApiInterestCreateRequest } from '@/app/infrastructure';
import { Injectable } from '@angular/core';
import { IInterestCreateRequest } from '../interfaces/iinterest-create-request';

@Injectable({
  providedIn: 'root',
})
export class ApiInterestCreateRequestAdapter extends AbstractApiRequestAdapter<ApiInterestCreateRequest, IInterestCreateRequest> {
  public override toApi(appModel: IInterestCreateRequest): ApiInterestCreateRequest {
    return {
      title: appModel.title,
    };
  }
}
