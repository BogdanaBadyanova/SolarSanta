import { inject, Injectable } from '@angular/core';
import { IParticipantShortInfo } from '../interfaces/iparticipant-short-info';
import { ApiGenderEnum, ApiParticipantShortView } from '@/app/infrastructure';
import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiGenderEnumAdapter } from '@/app/core/adapters/api-gender-enum.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiParticipantShortInfoAdapter extends AbstractApiResponseAdapter<ApiParticipantShortView, IParticipantShortInfo> {
  private _apiGenderEnumAdapter = inject(ApiGenderEnumAdapter);

  public override fromApi(apiModel: ApiParticipantShortView): IParticipantShortInfo {
    return {
      id: apiModel.id || '',
      firstName: apiModel.firstName || '',
      lastName: apiModel.lastName || '',
      email: apiModel.email || '',
      gender: this._apiGenderEnumAdapter.fromApi(apiModel.gender || ApiGenderEnum.$0),
    };
  }
}
