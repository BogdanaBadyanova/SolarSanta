/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBoxPairing } from '../../models/api-box-pairing';

export interface ApiBoxesBoxIdPairingsGet$Params {

/**
 * ID коробки.
 */
  boxId: string;
}

export function apiBoxesBoxIdPairingsGet(http: HttpClient, rootUrl: string, params: ApiBoxesBoxIdPairingsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiBoxPairing>>> {
  const rb = new RequestBuilder(rootUrl, apiBoxesBoxIdPairingsGet.PATH, 'get');
  if (params) {
    rb.path('boxId', params.boxId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiBoxPairing>>;
    })
  );
}

apiBoxesBoxIdPairingsGet.PATH = '/api/Boxes/{boxId}/pairings';