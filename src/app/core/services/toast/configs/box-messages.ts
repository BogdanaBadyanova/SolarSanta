import { BoxToastEnum } from '@/app/features/boxes/enums/box-toast.enum';
import { MessageConfig } from '../types/message-config';

/**
 * Сообщения, связанные с модулем коробок
 */
export const boxMessages: MessageConfig = {
  [BoxToastEnum.CREATE_BOX_SUCCESS]: {
    severity: 'success',
    summary: 'Успешно',
    detail: 'Коробка успешно создана!',
  },
  [BoxToastEnum.CREATE_BOX_FAILED]: {
    severity: 'error',
    summary: 'Ошибка создания',
    detail: 'Не удалось создать коробку.',
  },
  [BoxToastEnum.DELETE_BOX_SUCCESS]: {
    severity: 'success',
    summary: 'Успешно',
    detail: 'Выбранная вами коробка успешно удалена',
  },
};
