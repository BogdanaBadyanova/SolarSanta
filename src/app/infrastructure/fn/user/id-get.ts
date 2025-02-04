/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantView } from '../../models/api-participant-view';

export interface IdGet$Params {
  id: string;
}

export function idGet(http: HttpClient, rootUrl: string, params: IdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantView>> {
  const rb = new RequestBuilder(rootUrl, idGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiParticipantView>;
    })
  );
}

idGet.PATH = '/{id}';
