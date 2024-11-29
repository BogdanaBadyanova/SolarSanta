import { Routes } from '@angular/router';
import { LayoutRoutes } from './layout-routes.enum';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: LayoutRoutes.BOX },
  {
    path: '',
    loadComponent: () => import('@layouts/base-layout/base-layout.component').then((c) => c.BaseLayoutComponent),
    children: [
      {
        path: LayoutRoutes.AUTH,
        loadChildren: () => import('@auth/routing/auth.routes').then((c) => c.authRoutes),
      },
      {
        path: LayoutRoutes.INTRO,
        loadComponent: () => import('@intro/intro.component').then((c) => c.IntroComponent),
      },
      {
        path: LayoutRoutes.BOX,
        loadChildren: () => import('@boxes/routing/boxes.routes').then((c) => c.boxesRoutes),
      },
      {
        path: `${LayoutRoutes.PROFILE}/:id`,
        loadComponent: () => import('@profile/profile.component').then((c) => c.ProfileComponent),
      },
    ],
  },
];
