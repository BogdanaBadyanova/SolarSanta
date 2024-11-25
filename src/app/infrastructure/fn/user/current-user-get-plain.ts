/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCurrentUser } from '../../models/api-current-user';

export interface CurrentUserGet$Plain$Params {
}

export function currentUserGet$Plain(http: HttpClient, rootUrl: string, params?: CurrentUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCurrentUser>> {
  const rb = new RequestBuilder(rootUrl, currentUserGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiCurrentUser>;
    })
  );
}

currentUserGet$Plain.PATH = '/Current-user';