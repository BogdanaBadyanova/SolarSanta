import { GenderEnum } from '@/app/core/enums/gender.enum';

export interface IEditUserProfile {
  firstName: string;
  lastName: string;
  about: string;
  gender: GenderEnum;
}
