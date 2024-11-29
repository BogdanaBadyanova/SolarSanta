import { AbstractApiRequestAdapter } from '@/app/core/adapters/abstract-api-request.adapter';
import { ICreateBox } from '@/app/features/boxes/features/create-box/interfaces/create-box';
import { ApiCreateBoxRequest } from '@/app/infrastructure';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCreateBoxRequestAdapter extends AbstractApiRequestAdapter<ApiCreateBoxRequest, ICreateBox> {
  public override toApi(appModel: ICreateBox): ApiCreateBoxRequest {
    return {
      name: appModel.name,
      description: appModel.description,
      icon: appModel.icon,
      inviteEndDate: appModel.inviteEndDate,
      meetingDate: appModel.meetingDate,
      minGiftValue: appModel.minGiftValue,
      maxGiftValue: appModel.maxGiftValue,
      location: appModel.location,
      showResults: appModel.showResults || false,
    };
  }
}
