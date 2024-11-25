import { ApiBoxDetailAdapter } from '@/app/features/boxes/features/box-details/adapters/api-box-detail.adapter';
import { ApiInterestAdapters } from '@/app/features/profile/adapters/api-interest.adapter';
import { ApiApplicationUser } from '@/app/infrastructure';
import { inject, Injectable } from '@angular/core';
import { ICurrentUser } from '../interfaces/icurrent-user';
import { AbstractApiResponseAdapter } from './abstract-api-response.adapter';
import { ApiGenderEnumAdapter } from './api-gender-enum.adapter';
import { GenderEnum } from '../enums/gender.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiApplicationUserAdapter extends AbstractApiResponseAdapter<
  ApiApplicationUser,
  ICurrentUser
> {
  private _apiBoxDetailAdapter = inject(ApiBoxDetailAdapter);
  private _apiInterestAdapters = inject(ApiInterestAdapters);
  private _apiGenderEnumAdapter = inject(ApiGenderEnumAdapter);

  public fromApi(apiModel: ApiApplicationUser): ICurrentUser {
    return {
      id: apiModel.id ?? '',
      email: apiModel.email ?? '',
      firstName: apiModel.firstName ?? '',
      lastName: apiModel.lastName ?? '',
      about: apiModel.aboutMe ?? '',
      gender: apiModel.gender
        ? this._apiGenderEnumAdapter.fromApi(apiModel.gender)
        : GenderEnum.UNDEFINED,
      boxes: apiModel.boxes ? this._apiBoxDetailAdapter.arrayFromApi(apiModel.boxes) : [],
      interests: apiModel.interests
        ? this._apiInterestAdapters.arrayFromApi(apiModel.interests)
        : [],
    };
  }
}
