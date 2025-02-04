export interface IBoxView {
  /**
   *   Приватный идентификатор коробки.
   */
  id: string;

  /**
   *  Публичный идентификатор коробки.
   */
  idCode: string;

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
}
