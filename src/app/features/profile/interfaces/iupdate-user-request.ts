import { GenderEnum } from '@/app/core/enums/gender.enum';

export interface IUpdateUserRequest {
  /**
   * Поле "О себе".
   */
  about: string;

  /**
   * Имя пользователя.
   */
  firstName: string;

  /**
   * Фамилия пользователя.
   */
  lastName: string;

  /**
   * Пол пользователя.
   */
  gender: GenderEnum;
}
