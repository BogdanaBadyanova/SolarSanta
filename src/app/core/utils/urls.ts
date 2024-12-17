import { BoxesRoutes } from '@/app/features/boxes/routing/boxes-routes.enum';
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

  /**
   * URL для страниц модуля коробок.
   */
  private static readonly BOX_URL = [...this.BASE_URL, LayoutRoutes.BOX];

  /**
   * URL для страницы создания коробки.
   */
  public static readonly BOX_CREATE_URL = [...this.BOX_URL, BoxesRoutes.CREATE];

  /**
   * URL для страницы просмотра коробки.
   */
  public static BOX_DETAILS_URL = (id: string): string[] => {
    return [...this.BOX_URL, BoxesRoutes.DETAILS, id];
  };

  /**
   * URL для страницы приглашения участника в коробку.
   */
  public static SHARE_LINK_URL = (id: string): string[] => {
    return [...this.BOX_URL, BoxesRoutes.ADD_PARTICIPANTS, id];
  };

  /**
   * URL для страницы профиля участника.
   */
  public static PROFILE_URL = (id: string): string[] => {
    return [...this.BASE_URL, LayoutRoutes.PROFILE, id];
  };
}
