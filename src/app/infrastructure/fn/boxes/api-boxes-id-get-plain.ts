/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBoxDetail } from '../../models/api-box-detail';

export interface ApiBoxesIdGet$Plain$Params {
  id: string;
}

export function apiBoxesIdGet$Plain(
  http: HttpClient,
  rootUrl: string,
  params: ApiBoxesIdGet$Plain$Params,
  context?: HttpContext,
): Observable<StrictHttpResponse<ApiBoxDetail>> {
  const rb = new RequestBuilder(rootUrl, apiBoxesIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(rb.build({ responseType: 'text', accept: 'text/plain', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiBoxDetail>;
    }),
  );
}

apiBoxesIdGet$Plain.PATH = '/api/Boxes/{id}';