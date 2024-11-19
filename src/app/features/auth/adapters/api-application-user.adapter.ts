import { Injectable } from '@angular/core';
import { AbstractApiResponseAdapter } from '../../../core/adapters/abstract-api-response.adapter';
import { ICurrentUser } from '../../../core/interfaces/icurrent-user';
import { ApiApplicationUser } from '@/app/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class ApiApplicationUserAdapter extends AbstractApiResponseAdapter<
  ApiApplicationUser,
  ICurrentUser
> {
  public fromApi(apiModel: ApiApplicationUser): ICurrentUser {
    return {
      id: apiModel.id ?? '',
      email: apiModel.email ?? '',
      firstName: apiModel.firstName ?? '',
      lastName: apiModel.lastName ?? '',
    };
  }
}
