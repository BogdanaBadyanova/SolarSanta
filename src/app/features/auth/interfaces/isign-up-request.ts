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
   * Отчество нового пользователя
   */
  middleName?: string | null;

  /**
   * Пароль нового пользователя
   */
  password: string | null;
}
