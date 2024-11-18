import { Injectable } from '@angular/core';
import { AbstractApiResponseAdapter } from './abstract-api-response.adapter';
import { ICurrentUser } from '../interfaces/icurrent-user';
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
      id: apiModel.id ?? null,
      email: apiModel.email ?? null,
      emailConfirmed: apiModel.emailConfirmed ?? false,
      firstName: apiModel.firstName || 'TestF',
      lastName: apiModel.lastName || 'TestL',
    };
  }
}
