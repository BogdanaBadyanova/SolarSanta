import { ISignUpRequest } from '@/app/features/auth/interfaces/isign-up-request';
import { Injectable } from '@angular/core';
import { AbstractApiRequestAdapter } from '../../../core/adapters/abstract-api-request.adapter';
import { ApiSignUpRequest } from '@/app/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class ApiSignUpRequestAdapter extends AbstractApiRequestAdapter<
  ApiSignUpRequest,
  ISignUpRequest
> {
  public toApi(appModel: ISignUpRequest): ApiSignUpRequest {
    return {
      email: appModel.email || null,
      password: appModel.password || null,
    };
  }
}
