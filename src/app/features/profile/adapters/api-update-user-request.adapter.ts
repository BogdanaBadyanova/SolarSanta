import { ApiUpdateUserRequest } from '@/app/infrastructure';
import { inject, Injectable } from '@angular/core';
import { AbstractApiRequestAdapter } from '@/app/core/adapters/abstract-api-request.adapter';
import { IUpdateUserRequest } from '../interfaces/iupdate-user-request';
import { ApiGenderEnumAdapter } from '@/app/core/adapters/api-gender-enum.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiUpdateUserRequestAdapter extends AbstractApiRequestAdapter<ApiUpdateUserRequest, IUpdateUserRequest> {
  private _apiGenderEnumAdapter = inject(ApiGenderEnumAdapter);

  public override toApi(appModel: IUpdateUserRequest): ApiUpdateUserRequest {
    return {
      firstName: appModel.firstName,
      lastName: appModel.lastName,
      aboutMe: appModel.about,
      gender: this._apiGenderEnumAdapter.toApi(appModel.gender),
    };
  }
}
