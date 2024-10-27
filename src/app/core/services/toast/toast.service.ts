import { inject, Injectable } from '@angular/core';
import { TuiAlertService, TuiAlertOptions } from '@taiga-ui/core';
import { authMessages } from '@core/services/toast/configs/auth-messages';
import { MessageConfig } from '@core/services/toast/types/message-config';
import { first } from 'rxjs';

/**
 * Сервис для отображения всплывающих уведомлений (тостов) в приложении.
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _messageService = inject(TuiAlertService);

  /**
   * Объединение всех конфигураций сообщений
   */
  private _messageConfig: MessageConfig = {
    ...authMessages,
  };

  /**
   * Отображает сообщение на основе предоставленного ключа.
   *
   * @param messageKey - Ключ сообщения, который соответствует конфигурации сообщения.
   * @param config - Опциональный объект с параметрами сообщения, которые можно переопределить.
   *
   * Метод проверяет, существует ли конфигурация сообщения для указанного ключа.
   * Если конфигурация найдена, сообщение добавляется в сервис сообщений с параметрами,
   * объединенными из конфигурации и переданного объекта config.
   * Если конфигурация не найдена, выводится предупреждение в консоль.
   *
   * Пример использования:
   * this.toastService.showMessage(CourseToastEnum.COURSE_REMOVED, { detail: 'Курс был успешно удалён.' });
   *
   * В данном примере поле detail будет переопределено, а остальные поля будут взяты из конфигурации.
   */
  public showMessage(messageKey: string, config?: TuiAlertOptions): void {
    const messageConfig = this._messageConfig[messageKey];

    if (!messageConfig) {
      console.warn(`Конфигурация сообщения для ключа '${messageKey}' не найдена.`);
      return;
    }

    this._messageService
      .open({
        ...messageConfig,
        ...Object.fromEntries(Object.entries(config || {}).filter(([_, value]) => !!value)),
      })
      .pipe(first())
      .subscribe();
  }
}
