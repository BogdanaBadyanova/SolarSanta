import { Routes } from '@angular/router';
import { BoxesRoutes } from './boxes-routes.enum';

export const boxesRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: BoxesRoutes.CREATE },
  {
    path: '',
    loadComponent: () => import('@boxes/boxes.component').then((c) => c.BoxesComponent),
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
        path: `${BoxesRoutes.ADD_PARTICIPANTS}/:id`,
        loadComponent: () => import('@boxes/features/share-link/share-link.component').then((c) => c.ShareLinkComponent),
      },
    ],
  },
];
