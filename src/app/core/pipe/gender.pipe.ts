import { Pipe, PipeTransform } from '@angular/core';
import { assertionNeverUtil } from '../utils/assertion-never.util';
import { GenderEnum } from '../enums/gender.enum';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  public transform(value?: GenderEnum | null): string {
    switch (value) {
      case GenderEnum.MALE:
        return 'Мужской';
      case GenderEnum.FEMALE:
        return 'Женский';
      case GenderEnum.UNDEFINED:
      case null:
      case undefined:
        return '';
      default: {
        assertionNeverUtil(value, 'Отсутсвует реализация для одного из полов');
      }
    }
  }
}
