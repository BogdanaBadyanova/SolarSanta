export interface IUpdateUserRequest {
  /**
   * Поле "О себе".
   */
  aboutMe?: string;

  /**
   * Имя пользователя.
   */
  firstName?: string;

  /**
   * Фамилия пользователя.
   */
  lastName?: string;
}
