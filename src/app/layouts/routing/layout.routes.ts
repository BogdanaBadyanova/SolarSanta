import { Routes } from '@angular/router';
import { LayoutRoutes } from './layout-routes.enum';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: LayoutRoutes.INTRO },
  {
    path: '',
    loadComponent: () =>
      import('@layouts/base-layout/base-layout.component').then((c) => c.BaseLayoutComponent),
    children: [
      {
        path: LayoutRoutes.AUTH,
        loadChildren: () => import('@auth/routing/auth.routes').then((c) => c.authRoutes),
      },
      {
        path: LayoutRoutes.INTRO,
        loadChildren: () => import('@intro/routing/intro.routes').then((c) => c.introRoutes),
      },
    ],
  },
];
