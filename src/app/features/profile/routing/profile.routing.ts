import { authRequiredGuard } from '@/app/core/guards/auth-required.guard';
import { Routes } from '@angular/router';

export const profileRoutes: Routes = [
  {
    path: `:id`,
    loadComponent: () => import('@profile/profile.component').then((c) => c.ProfileComponent),
    canActivate: [authRequiredGuard],
  },
];
