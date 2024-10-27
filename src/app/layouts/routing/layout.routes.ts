import { Routes } from '@angular/router';
import { LayoutRoutes } from './layout-routes.enum';
import { BaseLayoutComponent } from '@layouts/base-layout/base-layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: LayoutRoutes.INTRO },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: LayoutRoutes.AUTH,
        loadChildren: () => import('@auth/routing/auth.routes').then(m => m.authRoutes),
      },
      {
        path: LayoutRoutes.INTRO,
        loadChildren: () => import('@intro/routing/intro.routes').then(m => m.introRoutes),
      },
    ],
  },
];
