import { LayoutRoutes } from '@/app/layouts/routing/layout-routes.enum';
import { AuthRoutes } from '@auth/routing/auth.routes.enum';

/**
 * Класс для управления маршрутами приложения.
 * Предоставляет методы для создания URL-адресов, используемых в приложении.
 */
export class Urls {
  /**
   * Базовый URL приложения.
   */
  public static readonly BASE_URL = `/`;

  // ========= Вспомогательные =========

  /**
   * URL для страницы приветствия (вводной).
   */
  public static readonly INTRO_URL = [this.BASE_URL, LayoutRoutes.INTRO];

  // ========= Аутентификация =========

  /**
   * URL для аутентификации.
   */
  public static readonly AUTH_URL = [this.BASE_URL, LayoutRoutes.AUTH];

  /**
   * URL для страницы входа.
   */
  public static readonly SIGN_IN_URL = [...this.AUTH_URL, AuthRoutes.SIGN_IN];

  /**
   * URL для страницы регистрации.
   */
  public static readonly SIGN_UP_URL = [...this.AUTH_URL, AuthRoutes.SIGN_UP];
}
