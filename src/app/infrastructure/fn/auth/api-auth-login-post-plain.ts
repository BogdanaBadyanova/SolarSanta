/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAuthResult } from '../../models/api-auth-result';
import { ApiSignInRequest } from '../../models/api-sign-in-request';

export interface ApiAuthLoginPost$Plain$Params {
  
    /**
     * Учетные данные пользователя, включая email и пароль.
     */
    body?: ApiSignInRequest
}

export function apiAuthLoginPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiAuthResult>> {
  const rb = new RequestBuilder(rootUrl, apiAuthLoginPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiAuthResult>;
    })
  );
}

apiAuthLoginPost$Plain.PATH = '/api/Auth/Login';
