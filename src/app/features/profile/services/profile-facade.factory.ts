import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { PersonalProfileFacade } from './personal-profile.facade';
import { PublicProfileFacade } from './public-profile.facade';
import { AbstractProfileFacade } from './abstract-profile.facade';

export const profileFacadeFactory = (route: ActivatedRoute): AbstractProfileFacade => {
  const authService = inject(AuthService);
  const currentUser = authService.currentUser();
  const routeId = route.snapshot.paramMap.get('id');

  if (currentUser && currentUser.id === routeId) {
    return new PersonalProfileFacade();
  }

  return new PublicProfileFacade();
};
