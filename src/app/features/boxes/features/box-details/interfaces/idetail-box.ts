import { IParticipantShortInfo } from './iparticipant-short-info';

export interface IBoxDetails {
  /**
   *   Приватный идентификатор коробки.
   */
  id: string;

  /**
   * Название коробки
   */
  name: string;

  /**
   * Описание коробки
   */
  description: string;

  /**
   * Иконка коробки
   */
  icon: string;

  /**
* Дата до которой добавляем участников
 
*/
  inviteEndDate: string;

  /**
   * Дата сбора участников
   */
  meetingDate: string;

  /**
   * Мин цена подарка
   */
  minGiftValue: number;

  /**
   * Макс цена подарка
   */
  maxGiftValue: number;

  /**
   * Локация
   */
  location: string;

  /**
   * Флаг, можно ли запускать распределение участников
   */
  isExpiredDate: boolean;

  /**
   * Флаг, показывать ли кнопку запуска коробки
   */
  canStartRandomize: boolean;

  /**
   * Участники
   */
  participants: IParticipantShortInfo[];
}
