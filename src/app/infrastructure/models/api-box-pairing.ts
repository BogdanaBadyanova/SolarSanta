/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { ApiApplicationUser } from '../models/api-application-user';
import { ApiBox } from '../models/api-box';
export interface ApiBoxPairing {
  box?: ApiBox;
  boxId?: string;
  createdAt?: string;
  giver?: ApiApplicationUser;
  giverId?: string | null;
  id?: string;
  receiver?: ApiApplicationUser;
  receiverId?: string | null;
}