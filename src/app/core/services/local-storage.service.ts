import { Injectable } from '@angular/core';

/**
 * Сервис для работы с локальным хранилищем браузера.
 * Предоставляет методы для получения, установки и удаления данных.
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Получает значение из локального хранилища по заданному ключу.
   * @param key - Ключ, по которому нужно получить значение.
   * @returns Значение, связанное с ключом, или null, если ключ не существует.
   */
  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Устанавливает значение в локальное хранилище по заданному ключу.
   * @param key - Ключ, под которым будет сохранено значение.
   * @param value - Значение, которое нужно сохранить.
   */
  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Удаляет элемент из локального хранилища по заданному ключу.
   * @param key - Ключ элемента, который нужно удалить.
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
