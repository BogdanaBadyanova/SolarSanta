import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { map, tap } from 'rxjs';
import { ToastService } from '../services/toast/toast.service';
import { AuthToastEnum } from '@/app/features/auth/enums/auth-toast-enum';
import { Urls } from '../utils/urls';

export const authRequiredGuard: CanActivateFn = () => {
  const _authService = inject(AuthService);
  const _toastService = inject(ToastService);
  const _router = inject(Router);

  return _authService.getCurrentUser().pipe(
    tap((user) => {
      if (!user) {
        _toastService.showMessage(AuthToastEnum.AUTHORIZATION_REQUIRED);
        _router.navigate(Urls.SIGN_IN_URL);
      }
    }),
    map((user) => !!user),
  );
};
