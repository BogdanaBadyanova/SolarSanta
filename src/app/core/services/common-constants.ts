import { Injectable } from '@angular/core';

/**
 * Сервис, содержащий общие константы, используемые в приложении.
 */
@Injectable({
  providedIn: 'root',
})
export class CommonConstants {
  /**
   * Ключ для хранения данных пользователя в локальном хранилище.
   * Используется для доступа к информации об аутентификации пользователя.
   */
  public userClaimsLocalStorageKey = 'secret_santa_auth';
}
