import { ApiUpdateUserRequest } from '@/app/infrastructure';
import { Injectable } from '@angular/core';
import { AbstractApiRequestAdapter } from '@/app/core/adapters/abstract-api-request.adapter';
import { IUpdateUserRequest } from '../interfaces/iupdate-user-request';

@Injectable({
  providedIn: 'root',
})
export class ApiUpdateUserRequestAdapter extends AbstractApiRequestAdapter<
  ApiUpdateUserRequest,
  IUpdateUserRequest
> {
  public override toApi(appModel: ApiUpdateUserRequest): IUpdateUserRequest {
    return {
      aboutMe: appModel.aboutMe,
      firstName: appModel.firstName,
      lastName: appModel.lastName,
    };
  }
}
