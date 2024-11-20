import { ApiParticipant } from '@/app/infrastructure';
import { Injectable } from '@angular/core';
import { Participant } from '../interfaces/participant';
import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiParticipantAdapter extends AbstractApiResponseAdapter<ApiParticipant, Participant> {
  public override fromApi(apiModel: ApiParticipant): Participant {
    return {
      email: apiModel.email || '',
      id: apiModel.id || '',
      name: apiModel.name || '',
    };
  }
}
