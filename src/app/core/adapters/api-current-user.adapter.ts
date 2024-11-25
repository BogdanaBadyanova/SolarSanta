import { ApiInterestViewAdapter } from '@/app/features/profile/adapters/api-interest-view.adapter';
import { ApiCurrentUser } from '@/app/infrastructure';
import { inject, Injectable } from '@angular/core';
import { ICurrentUser } from '../interfaces/icurrent-user';
import { AbstractApiResponseAdapter } from './abstract-api-response.adapter';
import { ApiGenderEnumAdapter } from './api-gender-enum.adapter';
import { GenderEnum } from '../enums/gender.enum';
import { ApiBoxShortInfoAdapter } from '@/app/features/boxes/adapters/api-box-short-info.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiCurrentUserAdapter extends AbstractApiResponseAdapter<
  ApiCurrentUser,
  ICurrentUser
> {
  private _apiBoxShortInfoAdapter = inject(ApiBoxShortInfoAdapter);
  private _apiInterestViewAdapter = inject(ApiInterestViewAdapter);
  private _apiGenderEnumAdapter = inject(ApiGenderEnumAdapter);

  public fromApi(apiModel: ApiCurrentUser): ICurrentUser {
    return {
      id: apiModel.id ?? '',
      email: apiModel.email ?? '',
      firstName: apiModel.firstName ?? '',
      lastName: apiModel.lastName ?? '',
      about: apiModel.aboutMe ?? '',
      gender: apiModel.gender
        ? this._apiGenderEnumAdapter.fromApi(apiModel.gender)
        : GenderEnum.UNDEFINED,
      boxes: apiModel.boxes ? this._apiBoxShortInfoAdapter.arrayFromApi(apiModel.boxes) : [],
      interests: apiModel.interests
        ? this._apiInterestViewAdapter.arrayFromApi(apiModel.interests)
        : [],
    };
  }
}
