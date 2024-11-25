import { Injectable } from '@angular/core';
import { AbstractApiAdapter } from './abstract-api.adapter';
import { ApiGenderEnum } from '@/app/infrastructure';
import { GenderEnum } from '../enums/gender.enum';

@Injectable({ providedIn: 'root' })
export class ApiGenderEnumAdapter implements AbstractApiAdapter<ApiGenderEnum, GenderEnum> {
  public fromApi(apiModel: ApiGenderEnum): GenderEnum {
    switch (apiModel) {
      case ApiGenderEnum.$1:
        return GenderEnum.MALE;
      case ApiGenderEnum.$2:
        return GenderEnum.FEMALE;
      case ApiGenderEnum.$0:
      default:
        return GenderEnum.UNDEFINED;
    }
  }

  public toApi(appModel: GenderEnum): ApiGenderEnum {
    switch (appModel) {
      case GenderEnum.MALE:
        return ApiGenderEnum.$1;
      case GenderEnum.FEMALE:
        return ApiGenderEnum.$2;
      case GenderEnum.UNDEFINED:
      default:
        return ApiGenderEnum.$0;
    }
  }

  public arrayFromApi(apiModels: ApiGenderEnum[]): GenderEnum[] {
    return apiModels.map((i) => this.fromApi(i));
  }

  public arrayToApi(appModels: GenderEnum[]): ApiGenderEnum[] {
    return appModels.map((i) => this.toApi(i));
  }
}
