import { Injectable } from '@angular/core';
import { Participant } from '../interfaces/participant';
import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiParticipantView } from '@/app/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class ApiParticipantViewAdapter extends AbstractApiResponseAdapter<
  ApiParticipantView,
  Participant
> {
  public override fromApi(apiModel: ApiParticipantView): Participant {
    return {
      email: apiModel.email || '',
      id: apiModel.id || '',
      lastName: apiModel.lastName || '',
      firstName: apiModel.firstName || '',
    };
  }
}
