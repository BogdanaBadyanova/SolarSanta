export interface ISignInRequest {
  /**
   * Адрес электронной почты пользователя
   */
  email: string | null;

  /**
   * Пароль пользователя
   */
  password: string | null;
}
