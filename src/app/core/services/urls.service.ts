import { Injectable } from '@angular/core';
import { LayoutRoutes } from '@/app/layouts/routing/layout-routes.enum';
import { AuthRoutes } from '@auth/routing/auth.routes.enum';

/**
 * Сервис для управления маршрутами приложения.
 * Предоставляет методы для создания URL-адресов, используемых в приложении.
 */
@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  /**
   * Базовый URL приложения.
   */
  public readonly BASE_URL = `/`;

  // ========= Вспомогательные =========

  /**
   * URL для страницы приветствия (вводной).
   */
  public readonly INTRO_URL = [this.BASE_URL, LayoutRoutes.INTRO];

  // ========= Аутентификация =========

  /**
   * URL для аутентификации.
   */
  public readonly AUTH_URL = [this.BASE_URL, LayoutRoutes.AUTH];

  /**
   * URL для страницы входа.
   */
  public readonly SIGN_IN_URL = [...this.AUTH_URL, AuthRoutes.SIGN_IN];

  /**
   * URL для страницы регистрации.
   */
  public readonly SIGN_UP_URL = [...this.AUTH_URL, AuthRoutes.SIGN_UP];
}
