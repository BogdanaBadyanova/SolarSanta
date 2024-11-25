import { inject, Injectable } from '@angular/core';
import { IBoxDetails } from '../interfaces/detail-box';
import { ApiBoxDetail } from '@/app/infrastructure';
import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiParticipantViewAdapter } from './api-participant-view.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiBoxDetailAdapter extends AbstractApiResponseAdapter<ApiBoxDetail, IBoxDetails> {
  private _apiParticipantAdapter = inject(ApiParticipantViewAdapter);

  public override fromApi(apiModel: ApiBoxDetail): IBoxDetails {
    return {
      description: apiModel.description || '',
      icon: apiModel.icon || '',
      id: apiModel.id || '',
      idCode: apiModel.idCode || '',
      inviteEndDate: apiModel.inviteEndDate || '',
      location: apiModel.location || '',
      maxGiftValue: apiModel.maxGiftValue || 0,
      minGiftValue: apiModel.minGiftValue || 0,
      meetingDate: apiModel.meetingDate || '',
      name: apiModel.name || '',
      participants:
        apiModel.participants.map((item) => this._apiParticipantAdapter.fromApi(item)) || [],
    };
  }
}
