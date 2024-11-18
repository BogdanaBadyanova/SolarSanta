import { ISignInRequest } from '@/app/features/auth/interfaces/isign-in-request';
import { Injectable } from '@angular/core';
import { AbstractApiRequestAdapter } from './abstract-api-request.adapter';
import { ApiSignInRequest } from '@/app/infrastructure/api';

@Injectable({
  providedIn: 'root',
})
export class ApiSignInRequestAdapter extends AbstractApiRequestAdapter<
  ApiSignInRequest,
  ISignInRequest
> {
  public toApi(appModel: ISignInRequest): ApiSignInRequest {
    return {
      email: appModel.email || null,
      password: appModel.password || null,
    };
  }
}
