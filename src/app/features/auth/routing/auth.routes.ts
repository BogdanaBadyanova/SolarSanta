import { Routes } from '@angular/router';
import { AuthRoutes } from '@auth/routing/auth.routes.enum';
import { authGuard } from '@core/guards/auth.guard';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: AuthRoutes.SIGN_IN,
    pathMatch: 'full',
  },
  {
    path: AuthRoutes.SIGN_IN,
    loadComponent: () =>
      import('@auth/features/sign-in/sign-in.component').then((c) => c.SignInComponent),
    canActivate: [authGuard],
  },
  {
    path: AuthRoutes.SIGN_UP,
    loadComponent: () =>
      import('@auth/features/sign-up/sign-up.component').then((c) => c.SignUpComponent),
    canActivate: [authGuard],
  },
];
