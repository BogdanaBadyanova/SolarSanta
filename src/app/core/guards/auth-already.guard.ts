import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { ToastService } from '@core/services/toast/toast.service';
import { AuthToastEnum } from '@auth/enums/auth-toast-enum';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, map, tap, timer } from 'rxjs';

/**
 * authAlreadyGuard для предотвращения доступа к маршрутам, требующим неавторизованного пользователя.
 *
 * authAlreadyGuard проверяет, авторизован ли текущий пользователь. Если пользователь уже авторизован,
 * показывается сообщение и выполняется перенаправление на стартовую страницу.
 * Этот Guard возвращает `true` для неавторизованных пользователей, разрешая им доступ к маршруту,
 * и `false` для авторизованных, запрещая доступ к маршруту.
 *
 * Используется для маршрутов, доступных только для неавторизованных пользователей,
 * например, страницы входа или регистрации.
 *
 * @returns {boolean} Возвращает `true`, если пользователь не авторизован, и `false` — если авторизован.
 */
export const authAlreadyGuard: CanActivateFn = () => {
  const _authService = inject(AuthService);
  const _router = inject(Router);
  const _toastService = inject(ToastService);

  return combineLatest([timer(600), toObservable(_authService.isAuthenticated)]).pipe(
    tap(([_, isAuthenticated]) => {
      if (isAuthenticated) {
        _router.navigate(Urls.INTRO_URL);
        _toastService.showMessage(AuthToastEnum.ALREADY_AUTHORIZED);
      }
    }),
    map(([_, isAuthenticated]) => isAuthenticated),
  );
};
