export interface IAuthResult {
  /**
   * Токен доступа, полученный при аутентификации
   */
  token: string | null;

  /**
   * Тип токена (например, Bearer)
   */
  tokenType: string | null;

  /**
   * Дата и время истечения срока действия токена
   */
  expiryDate: string | null;
}
