import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { ToastService } from '@core/services/toast/toast.service';
import { AuthToastEnum } from '@auth/enums/auth-toast-enum';
import { AuthService } from '@/app/features/auth/services/auth.service';

export const authRequiredGuard: CanActivateFn = () => {
  const _authService = inject(AuthService);
  const _router = inject(Router);
  const _toastService = inject(ToastService);

  if (!_authService.isAuthenticated()) {
    _toastService.showMessage(AuthToastEnum.AUTHORIZATION_REQUIRED);
    _router.navigate(Urls.SIGN_IN_URL);
    return false;
  }

  return true;
};
