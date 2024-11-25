import { GenderEnum } from '../enums/gender.enum';

/**
 * Класс, содержащий общие константы, используемые в приложении.
 */
export class CommonConstants {
  /**
   * Ключ для хранения данных пользователя в локальном хранилище.
   * Используется для доступа к информации об аутентификации пользователя.
   */
  public static userClaimsLocalStorageKey = 'secret_santa_auth';

  /**
   *
   *
   */
  public static genders = [
    { value: 'М', key: GenderEnum.MALE },
    { value: 'Ж', key: GenderEnum.FEMALE },
  ];
}
