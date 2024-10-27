import { TuiAlertOptions } from '@taiga-ui/core';

/**
 * Конфигурация сообщений для тостов.
 *
 * @type MessageConfig
 * @property {string} [key] - Ключ сообщения.
 * @property {ToastMessageOptions} [options] - Опции сообщения.
 */
export type MessageConfig = Record<string, TuiAlertOptions>;
