import { IInterest } from '../../features/profile/interfaces/iinterest';
import { IBoxDetailsView } from '@/app/features/boxes/features/box-details/interfaces/detail-box-view';
import { GenderEnum } from '../enums/gender.enum';

/**
 * Интерфейс для представления текущего пользователя.
 */
export interface ICurrentUser {
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
   * Интересы пользователя
   */
  interests: IInterest[];

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

  boxes: IBoxDetailsView[];
}
