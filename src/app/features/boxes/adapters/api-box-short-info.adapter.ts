import { AbstractApiResponseAdapter } from '@/app/core/adapters/abstract-api-response.adapter';
import { ApiBoxShortInfo } from '@/app/infrastructure';
import { inject, Injectable } from '@angular/core';
import { IBoxShortInfo } from '../interfaces/ibox-short-info';
import { BoxLogoEnumAdapter } from '@/app/core/adapters/box-logo-enum.adapter';

@Injectable({
  providedIn: 'root',
})
export class ApiBoxShortInfoAdapter extends AbstractApiResponseAdapter<ApiBoxShortInfo, IBoxShortInfo> {
  private _boxLogoEnumAdapter = inject(BoxLogoEnumAdapter);

  public override fromApi(apiModel: ApiBoxShortInfo): IBoxShortInfo {
    return {
      id: apiModel.id || '',
      name: apiModel.name || '',
      icon: this._boxLogoEnumAdapter.fromApi(apiModel.icon),
    };
  }
}
