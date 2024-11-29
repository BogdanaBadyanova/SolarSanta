import { inject, Injectable } from '@angular/core';
import { IBoxDetails } from '../interfaces/idetail-box';
import { ApiBoxDetail } from '@/app/infrastructure';
import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiParticipantShortInfoAdapter } from './api-participant-short-info-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class ApiBoxDetailAdapter extends AbstractApiResponseAdapter<ApiBoxDetail, IBoxDetails> {
  private _apiParticipantShortInfoAdapter = inject(ApiParticipantShortInfoAdapter);

  public override fromApi(apiModel: ApiBoxDetail): IBoxDetails {
    return {
      description: apiModel.description || '',
      icon: apiModel.icon || '',
      id: apiModel.id || '',
      inviteEndDate: apiModel.inviteEndDate || '',
      canStartRandomize: apiModel.canStartRandomize || false,
      isExpiredDate: apiModel.isExpiredDate || false,
      location: apiModel.location || '',
      maxGiftValue: apiModel.maxGiftValue || 0,
      minGiftValue: apiModel.minGiftValue || 0,
      meetingDate: apiModel.meetingDate || '',
      name: apiModel.name || '',
      participants: apiModel.participants
        ? apiModel.participants.map((item) => this._apiParticipantShortInfoAdapter.fromApi(item))
        : [],
    };
  }
}
