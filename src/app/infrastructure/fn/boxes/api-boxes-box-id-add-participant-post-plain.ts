/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiBoxesBoxIdAddParticipantPost$Plain$Params {

/**
 * ID коробки
 */
  boxId: string;

/**
 * Email участника для добавления
 */
  email?: string;
}

export function apiBoxesBoxIdAddParticipantPost$Plain(http: HttpClient, rootUrl: string, params: ApiBoxesBoxIdAddParticipantPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, apiBoxesBoxIdAddParticipantPost$Plain.PATH, 'post');
  if (params) {
    rb.path('boxId', params.boxId, {});
    rb.query('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

apiBoxesBoxIdAddParticipantPost$Plain.PATH = '/api/Boxes/{boxId}/add-participant';
