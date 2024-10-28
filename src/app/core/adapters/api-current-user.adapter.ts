import { Injectable } from '@angular/core';
import { AbstractApiResponseAdapter } from './abstract-api-response.adapter';
import { ICurrentUser } from '../interfaces/icurrent-user';
import { ApiCurrentUser } from '@/app/infrastructure/models/api-current-user';

@Injectable({
  providedIn: 'root',
})
export class ApiCurrentUserAdapter extends AbstractApiResponseAdapter<
  ApiCurrentUser,
  ICurrentUser
> {
  public fromApi(apiModel: ApiCurrentUser): ICurrentUser {
    return {
      id: apiModel.id ?? null,
      email: apiModel.email ?? null,
      emailConfirmed: apiModel.emailConfirmed ?? false,
      firstName: apiModel.firstName ?? null,
      lastName: apiModel.lastName ?? null,
      middleName: apiModel.middleName ?? null,
    };
  }
}
