import { Injectable } from '@angular/core';
import { AbstractApiResponseAdapter } from '../../../core/adapters/abstract-api-response.adapter';
import { IAuthResult } from '@/app/features/auth/interfaces/iauth-result';
import { ApiAuthResult } from '@/app/infrastructure';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthResultAdapter extends AbstractApiResponseAdapter<ApiAuthResult, IAuthResult> {
  public fromApi(apiModel: ApiAuthResult): IAuthResult {
    return {
      expiryDate: apiModel.expiryDate ?? null,
      token: apiModel.token ?? null,
      tokenType: apiModel.tokenType ?? null,
    };
  }
}
