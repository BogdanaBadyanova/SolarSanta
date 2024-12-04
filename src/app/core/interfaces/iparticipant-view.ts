import { GenderEnum } from '../enums/gender.enum';
import { IBoxShortInfo } from '@/app/features/boxes/interfaces/ibox-short-info';

/**
 * Интерфейс для представления пользователя.
 */
export interface IParticipantView {
  /**
   * Уникальный идентификатор пользователя
   */
  id: string;

  /**
   * Адрес электронной почты пользователя
   */
  email: string;

  /**
   * Имя пользователя
   */
  firstName: string;

  /**
   * Фамилия пользователя
   */
  lastName: string;

  /**
   * Пол пользователя
   */
  gender: GenderEnum;

  /**
   * О себе
   */
  about: string;

  /**
   * Коробки пользователя
   */

  boxes: IBoxShortInfo[];
}
