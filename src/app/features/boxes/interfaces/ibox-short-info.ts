import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';

export interface IBoxShortInfo {
  /**
   * Иконка, ассоциированная с коробкой.
   */
  icon: BoxLogoEnum;

  /**
   * Приватный идентификатор коробки.
   */
  id: string;

  /**
   * Наименование коробки.
   */
  name: string;
}
