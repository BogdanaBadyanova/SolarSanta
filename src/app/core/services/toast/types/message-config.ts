import { Message } from 'primeng/api';

/**
 * Конфигурация сообщений для тостов.
 *
 * @type MessageConfig
 * @property {string} [key] - Ключ сообщения.
 * @property {Message} [options] - Опции сообщения.
 */
export type MessageConfig = Record<string, Message>;
