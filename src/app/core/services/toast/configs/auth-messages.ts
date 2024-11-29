import { MessageConfig } from '../types/message-config';
import { AuthToastEnum } from '@auth/enums/auth-toast-enum';

/**
 * Сообщения, связанные с авторизацией и аутентификацией
 */
export const authMessages: MessageConfig = {
  [AuthToastEnum.SIGN_IN_SUCCESS]: {
    severity: 'success',
    summary: 'Успешный вход',
    detail: 'Вы успешно вошли в свой аккаунт!',
  },
  [AuthToastEnum.SIGN_IN_FAILED]: {
    severity: 'error',
    summary: 'Ошибка входа',
    detail: 'Не удалось войти в аккаунт. Проверьте свои учетные данные и попробуйте еще раз.',
  },
  [AuthToastEnum.SIGN_UP_SUCCESS]: {
    severity: 'success',
    summary: 'Регистрация успешна',
    detail: 'Ваш аккаунт был успешно создан. Вы можете войти, используя свои учетные данные.',
  },
  [AuthToastEnum.SIGN_UP_FAILED]: {
    severity: 'error',
    summary: 'Ошибка регистрации',
    detail:
      'Не удалось создать аккаунт. Пожалуйста, проверьте введенные данные и попробуйте еще раз.',
  },
  [AuthToastEnum.ALREADY_AUTHORIZED]: {
    severity: 'info',
    summary: 'Уже авторизованы',
    detail: 'Вы уже вошли в свой аккаунт.',
  },
  [AuthToastEnum.AUTHORIZATION_REQUIRED]: {
    severity: 'error',
    summary: 'Требуется авторизация',
    detail:
      'Доступ закрыт для неавторизованных пользователей. Войдите в свой аккаунт или зарегистрируйтесь.',
  },
};
