import { Routes } from '@angular/router';
import { BoxesRoutes } from './boxes-routes.enum';
import { authRequiredGuard } from '@/app/core/guards/auth-required.guard';

export const boxesRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: BoxesRoutes.CREATE },
  {
    path: '',
    loadComponent: () => import('@boxes/boxes.component').then((c) => c.BoxesComponent),
    canActivate: [authRequiredGuard],
    children: [
      {
        path: BoxesRoutes.CREATE,
        loadComponent: () => import('@boxes/features/create-box/create-box.component').then((c) => c.CreateBoxComponent),
      },
      {
        path: `${BoxesRoutes.DETAILS}/:id`,
        loadComponent: () => import('@boxes/features/box-details/box-details.component').then((c) => c.BoxDetailsComponent),
      },
      {
        path: `${BoxesRoutes.SHARE}/:id`,
        loadComponent: () => import('@boxes/features/share-link/share-link.component').then((c) => c.ShareLinkComponent),
      },
    ],
  },
];
