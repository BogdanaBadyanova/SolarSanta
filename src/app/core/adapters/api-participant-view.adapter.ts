import { ApiParticipantView } from '@/app/infrastructure';
import { inject, Injectable } from '@angular/core';
import { IParticipantView } from '../interfaces/iparticipant-view';
import { AbstractApiResponseAdapter } from './abstract-api-response.adapter';
import { ApiGenderEnumAdapter } from './api-gender-enum.adapter';
import { GenderEnum } from '../enums/gender.enum';
import { ApiBoxShortInfoAdapter } from '@/app/features/boxes/adapters/api-box-short-info.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiParticipantViewAdapter extends AbstractApiResponseAdapter<ApiParticipantView, IParticipantView> {
  private _apiBoxShortInfoAdapter = inject(ApiBoxShortInfoAdapter);
  private _apiGenderEnumAdapter = inject(ApiGenderEnumAdapter);

  public fromApi(apiModel: ApiParticipantView): IParticipantView {
    return {
      id: apiModel.id ?? '',
      email: apiModel.email ?? '',
      firstName: apiModel.firstName ?? '',
      lastName: apiModel.lastName ?? '',
      about: apiModel.aboutMe ?? '',
      gender: apiModel.gender ? this._apiGenderEnumAdapter.fromApi(apiModel.gender) : GenderEnum.UNDEFINED,
      boxes: apiModel.boxes ? this._apiBoxShortInfoAdapter.arrayFromApi(apiModel.boxes) : [],
    };
  }
}
