import { GenderEnum } from '@/app/core/enums/gender.enum';

export interface ISignUpRequest {
  /**
   * Адрес электронной почты нового пользователя
   */
  email: string | null;

  /**
   * Имя нового пользователя
   */
  firstName: string | null;

  /**
   * Фамилия нового пользователя
   */
  lastName: string | null;

  /**
   * Пол нового пользователя
   */
  gender: GenderEnum;

  /**
   * Пароль нового пользователя
   */
  password: string | null;
}
