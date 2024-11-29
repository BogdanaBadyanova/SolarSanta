import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { toObservable } from '@angular/core/rxjs-interop';

export const authRequiredGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  return toObservable(authService.isAuthenticated);
};
