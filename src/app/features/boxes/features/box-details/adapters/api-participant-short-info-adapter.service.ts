import { Injectable } from '@angular/core';
import { IParticipantShortInfo } from '../interfaces/iparticipant-short-info';
import { ApiParticipantShortView } from '@/app/infrastructure';
import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiParticipantShortInfoAdapter extends AbstractApiResponseAdapter<
  ApiParticipantShortView,
  IParticipantShortInfo
> {
  public override fromApi(apiModel: ApiParticipantShortView): IParticipantShortInfo {
    return {
      id: apiModel.id || '',
      firstName: apiModel.firstName || '',
      lastName: apiModel.lastName || '',
      email: apiModel.email || '',
    };
  }
}
