/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBoxesBoxIdAddParticipantPost } from '../fn/boxes/api-boxes-box-id-add-participant-post';
import { ApiBoxesBoxIdAddParticipantPost$Params } from '../fn/boxes/api-boxes-box-id-add-participant-post';
import { apiBoxesBoxIdAddParticipantPost$Plain } from '../fn/boxes/api-boxes-box-id-add-participant-post-plain';
import { ApiBoxesBoxIdAddParticipantPost$Plain$Params } from '../fn/boxes/api-boxes-box-id-add-participant-post-plain';
import { apiBoxesIdDelete } from '../fn/boxes/api-boxes-id-delete';
import { ApiBoxesIdDelete$Params } from '../fn/boxes/api-boxes-id-delete';
import { apiBoxesIdDelete$Plain } from '../fn/boxes/api-boxes-id-delete-plain';
import { ApiBoxesIdDelete$Plain$Params } from '../fn/boxes/api-boxes-id-delete-plain';
import { apiBoxesIdGet } from '../fn/boxes/api-boxes-id-get';
import { ApiBoxesIdGet$Params } from '../fn/boxes/api-boxes-id-get';
import { apiBoxesIdGet$Plain } from '../fn/boxes/api-boxes-id-get-plain';
import { ApiBoxesIdGet$Plain$Params } from '../fn/boxes/api-boxes-id-get-plain';
import { apiBoxesPagedBoxesPost } from '../fn/boxes/api-boxes-paged-boxes-post';
import { ApiBoxesPagedBoxesPost$Params } from '../fn/boxes/api-boxes-paged-boxes-post';
import { apiBoxesPagedBoxesPost$Plain } from '../fn/boxes/api-boxes-paged-boxes-post-plain';
import { ApiBoxesPagedBoxesPost$Plain$Params } from '../fn/boxes/api-boxes-paged-boxes-post-plain';
import { apiBoxesPost } from '../fn/boxes/api-boxes-post';
import { ApiBoxesPost$Params } from '../fn/boxes/api-boxes-post';
import { apiBoxesPost$Plain } from '../fn/boxes/api-boxes-post-plain';
import { ApiBoxesPost$Plain$Params } from '../fn/boxes/api-boxes-post-plain';
import { ApiBoxDetail } from '../models/api-box-detail';
import { ApiBoxView } from '../models/api-box-view';
import { ApiBoxViewPaginatedResponse } from '../models/api-box-view-paginated-response';

@Injectable({ providedIn: 'root' })
export class BoxesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBoxesPagedBoxesPost()` */
  static readonly ApiBoxesPagedBoxesPostPath = '/api/Boxes/paged-boxes';

  /**
   * Получение пагинированного списка коробок.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesPagedBoxesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPagedBoxesPost$Plain$Response(params?: ApiBoxesPagedBoxesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxViewPaginatedResponse>> {
    return apiBoxesPagedBoxesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Получение пагинированного списка коробок.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesPagedBoxesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPagedBoxesPost$Plain(params?: ApiBoxesPagedBoxesPost$Plain$Params, context?: HttpContext): Observable<ApiBoxViewPaginatedResponse> {
    return this.apiBoxesPagedBoxesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxViewPaginatedResponse>): ApiBoxViewPaginatedResponse => r.body)
    );
  }

  /**
   * Получение пагинированного списка коробок.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesPagedBoxesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPagedBoxesPost$Response(params?: ApiBoxesPagedBoxesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxViewPaginatedResponse>> {
    return apiBoxesPagedBoxesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Получение пагинированного списка коробок.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesPagedBoxesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPagedBoxesPost(params?: ApiBoxesPagedBoxesPost$Params, context?: HttpContext): Observable<ApiBoxViewPaginatedResponse> {
    return this.apiBoxesPagedBoxesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxViewPaginatedResponse>): ApiBoxViewPaginatedResponse => r.body)
    );
  }

  /** Path part for operation `apiBoxesPost()` */
  static readonly ApiBoxesPostPath = '/api/Boxes';

  /**
   * Создание новой коробки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPost$Plain$Response(params?: ApiBoxesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxView>> {
    return apiBoxesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Создание новой коробки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPost$Plain(params?: ApiBoxesPost$Plain$Params, context?: HttpContext): Observable<ApiBoxView> {
    return this.apiBoxesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxView>): ApiBoxView => r.body)
    );
  }

  /**
   * Создание новой коробки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPost$Response(params?: ApiBoxesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxView>> {
    return apiBoxesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Создание новой коробки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBoxesPost(params?: ApiBoxesPost$Params, context?: HttpContext): Observable<ApiBoxView> {
    return this.apiBoxesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxView>): ApiBoxView => r.body)
    );
  }

  /** Path part for operation `apiBoxesIdGet()` */
  static readonly ApiBoxesIdGetPath = '/api/Boxes/{id}';

  /**
   * Получение коробки по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdGet$Plain$Response(params: ApiBoxesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxDetail>> {
    return apiBoxesIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Получение коробки по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdGet$Plain(params: ApiBoxesIdGet$Plain$Params, context?: HttpContext): Observable<ApiBoxDetail> {
    return this.apiBoxesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxDetail>): ApiBoxDetail => r.body)
    );
  }

  /**
   * Получение коробки по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdGet$Response(params: ApiBoxesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxDetail>> {
    return apiBoxesIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получение коробки по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdGet(params: ApiBoxesIdGet$Params, context?: HttpContext): Observable<ApiBoxDetail> {
    return this.apiBoxesIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxDetail>): ApiBoxDetail => r.body)
    );
  }

  /** Path part for operation `apiBoxesIdDelete()` */
  static readonly ApiBoxesIdDeletePath = '/api/Boxes/{id}';

  /**
   * Удаляет коробку по её уникальному идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdDelete$Plain$Response(params: ApiBoxesIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiBoxesIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет коробку по её уникальному идентификатору.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdDelete$Plain(params: ApiBoxesIdDelete$Plain$Params, context?: HttpContext): Observable<string> {
    return this.apiBoxesIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * Удаляет коробку по её уникальному идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdDelete$Response(params: ApiBoxesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiBoxesIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет коробку по её уникальному идентификатору.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesIdDelete(params: ApiBoxesIdDelete$Params, context?: HttpContext): Observable<string> {
    return this.apiBoxesIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiBoxesBoxIdAddParticipantPost()` */
  static readonly ApiBoxesBoxIdAddParticipantPostPath = '/api/Boxes/{boxId}/add-participant';

  /**
   * Добавление участника в коробку.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdAddParticipantPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdAddParticipantPost$Plain$Response(params: ApiBoxesBoxIdAddParticipantPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiBoxesBoxIdAddParticipantPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Добавление участника в коробку.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdAddParticipantPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdAddParticipantPost$Plain(params: ApiBoxesBoxIdAddParticipantPost$Plain$Params, context?: HttpContext): Observable<string> {
    return this.apiBoxesBoxIdAddParticipantPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * Добавление участника в коробку.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdAddParticipantPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdAddParticipantPost$Response(params: ApiBoxesBoxIdAddParticipantPost$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiBoxesBoxIdAddParticipantPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Добавление участника в коробку.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdAddParticipantPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdAddParticipantPost(params: ApiBoxesBoxIdAddParticipantPost$Params, context?: HttpContext): Observable<string> {
    return this.apiBoxesBoxIdAddParticipantPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
