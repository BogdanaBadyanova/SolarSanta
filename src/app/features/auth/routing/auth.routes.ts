import { Routes } from '@angular/router';
import { AuthRoutes } from '@auth/routing/auth.routes.enum';
import { SignInComponent } from '@auth/features/sign-in/sign-in.component';
import { SignUpComponent } from '@auth/features/sign-up/sign-up.component';
import { authGuard } from '@core/guards/auth.guard';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: AuthRoutes.SIGN_IN,
    pathMatch: 'full',
  },
  {
    path: AuthRoutes.SIGN_IN,
    component: SignInComponent,
    canActivate: [authGuard],
  },
  {
    path: AuthRoutes.SIGN_UP,
    component: SignUpComponent,
    canActivate: [authGuard],
  },
];
