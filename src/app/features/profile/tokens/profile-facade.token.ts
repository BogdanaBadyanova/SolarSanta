import { InjectionToken } from '@angular/core';
import { AbstractProfileFacade } from '../services/abstract-profile.facade';

export const PROFILE_FACADE_TOKEN = new InjectionToken<AbstractProfileFacade>('PROFILE_FACADE_TOKEN');
