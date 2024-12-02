import { GenderEnum } from '@/app/core/enums/gender.enum';

export interface IParticipantShortInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
}
