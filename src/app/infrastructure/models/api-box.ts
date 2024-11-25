/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { ApiApplicationUser } from '../models/api-application-user';
export interface ApiBox {

  /**
   * Описание коробки
   */
  description?: string | null;

  /**
   * Иконка коробки
   */
  icon?: string | null;
  id?: string;
  idCode?: string | null;

  /**
   * Дата окончания приема участников
   */
  inviteEndDate?: string;

  /**
   * Место проведения
   */
  location?: string | null;

  /**
   * Сумма подарков до
   */
  maxGiftValue?: number;

  /**
   * Дата сбора участников
   */
  meetingDate?: string;

  /**
   * Сумма подарков от
   */
  minGiftValue?: number;

  /**
   * Наименование коробки
   */
  name?: string | null;

  /**
   * Список участников.
   */
  participants?: Array<ApiApplicationUser> | null;
}
