import { ISignUpRequest } from '@/app/features/auth/interfaces/isign-up-request';
import { inject, Injectable } from '@angular/core';
import { AbstractApiRequestAdapter } from '../../../core/adapters/abstract-api-request.adapter';
import { ApiSignUpRequest } from '@/app/infrastructure';
import { ApiGenderEnumAdapter } from '@/app/core/adapters/api-gender-enum.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiSignUpRequestAdapter extends AbstractApiRequestAdapter<ApiSignUpRequest, ISignUpRequest> {
  private _apiGenderEnumAdapter = inject(ApiGenderEnumAdapter);

  public toApi(appModel: ISignUpRequest): ApiSignUpRequest {
    return {
      firstName: appModel.firstName || null,
      lastName: appModel.lastName || null,
      gender: this._apiGenderEnumAdapter.toApi(appModel.gender),
      email: appModel.email || null,
      password: appModel.password || null,
    };
  }
}
