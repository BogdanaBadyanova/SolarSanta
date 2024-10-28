import { ISignUpRequest } from '@/app/features/auth/interfaces/isign-up-request';
import { Injectable } from '@angular/core';
import { AbstractApiRequestAdapter } from './abstract-api-request.adapter';
import { ApiSignUpRequest } from '@/app/infrastructure/models/api-sign-up-request';

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
      firstName: appModel.firstName || null,
      lastName: appModel.lastName || null,
      middleName: appModel.middleName || null,
      password: appModel.password || null,
    };
  }
}
