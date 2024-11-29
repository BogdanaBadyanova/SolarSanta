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
import { apiBoxesBoxIdMyGiverGet } from '../fn/boxes/api-boxes-box-id-my-giver-get';
import { ApiBoxesBoxIdMyGiverGet$Params } from '../fn/boxes/api-boxes-box-id-my-giver-get';
import { apiBoxesBoxIdMyGiverGet$Plain } from '../fn/boxes/api-boxes-box-id-my-giver-get-plain';
import { ApiBoxesBoxIdMyGiverGet$Plain$Params } from '../fn/boxes/api-boxes-box-id-my-giver-get-plain';
import { apiBoxesBoxIdMyReceiverGet } from '../fn/boxes/api-boxes-box-id-my-receiver-get';
import { ApiBoxesBoxIdMyReceiverGet$Params } from '../fn/boxes/api-boxes-box-id-my-receiver-get';
import { apiBoxesBoxIdMyReceiverGet$Plain } from '../fn/boxes/api-boxes-box-id-my-receiver-get-plain';
import { ApiBoxesBoxIdMyReceiverGet$Plain$Params } from '../fn/boxes/api-boxes-box-id-my-receiver-get-plain';
import { apiBoxesBoxIdPairingsGet } from '../fn/boxes/api-boxes-box-id-pairings-get';
import { ApiBoxesBoxIdPairingsGet$Params } from '../fn/boxes/api-boxes-box-id-pairings-get';
import { apiBoxesBoxIdPairingsGet$Plain } from '../fn/boxes/api-boxes-box-id-pairings-get-plain';
import { ApiBoxesBoxIdPairingsGet$Plain$Params } from '../fn/boxes/api-boxes-box-id-pairings-get-plain';
import { apiBoxesBoxIdRandomizeParticipantsPost } from '../fn/boxes/api-boxes-box-id-randomize-participants-post';
import { ApiBoxesBoxIdRandomizeParticipantsPost$Params } from '../fn/boxes/api-boxes-box-id-randomize-participants-post';
import { apiBoxesBoxIdRandomizeParticipantsPost$Plain } from '../fn/boxes/api-boxes-box-id-randomize-participants-post-plain';
import { ApiBoxesBoxIdRandomizeParticipantsPost$Plain$Params } from '../fn/boxes/api-boxes-box-id-randomize-participants-post-plain';
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
import { ApiBoxPairing } from '../models/api-box-pairing';
import { ApiBoxView } from '../models/api-box-view';
import { ApiBoxViewPaginatedResponse } from '../models/api-box-view-paginated-response';
import { ApiParticipantShortView } from '../models/api-participant-short-view';

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

  /** Path part for operation `apiBoxesBoxIdPairingsGet()` */
  static readonly ApiBoxesBoxIdPairingsGetPath = '/api/Boxes/{boxId}/pairings';

  /**
   * Получает список пар участников для указанной коробки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdPairingsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdPairingsGet$Plain$Response(params: ApiBoxesBoxIdPairingsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiBoxPairing>>> {
    return apiBoxesBoxIdPairingsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Получает список пар участников для указанной коробки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdPairingsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdPairingsGet$Plain(params: ApiBoxesBoxIdPairingsGet$Plain$Params, context?: HttpContext): Observable<Array<ApiBoxPairing>> {
    return this.apiBoxesBoxIdPairingsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiBoxPairing>>): Array<ApiBoxPairing> => r.body)
    );
  }

  /**
   * Получает список пар участников для указанной коробки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdPairingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdPairingsGet$Response(params: ApiBoxesBoxIdPairingsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiBoxPairing>>> {
    return apiBoxesBoxIdPairingsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получает список пар участников для указанной коробки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdPairingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdPairingsGet(params: ApiBoxesBoxIdPairingsGet$Params, context?: HttpContext): Observable<Array<ApiBoxPairing>> {
    return this.apiBoxesBoxIdPairingsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiBoxPairing>>): Array<ApiBoxPairing> => r.body)
    );
  }

  /** Path part for operation `apiBoxesBoxIdMyReceiverGet()` */
  static readonly ApiBoxesBoxIdMyReceiverGetPath = '/api/Boxes/{boxId}/my-receiver';

  /**
   * Возвращает информацию о пользователе, которого поздравляет текущий пользователь в указанной коробке.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdMyReceiverGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyReceiverGet$Plain$Response(params: ApiBoxesBoxIdMyReceiverGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantShortView>> {
    return apiBoxesBoxIdMyReceiverGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Возвращает информацию о пользователе, которого поздравляет текущий пользователь в указанной коробке.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdMyReceiverGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyReceiverGet$Plain(params: ApiBoxesBoxIdMyReceiverGet$Plain$Params, context?: HttpContext): Observable<ApiParticipantShortView> {
    return this.apiBoxesBoxIdMyReceiverGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantShortView>): ApiParticipantShortView => r.body)
    );
  }

  /**
   * Возвращает информацию о пользователе, которого поздравляет текущий пользователь в указанной коробке.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdMyReceiverGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyReceiverGet$Response(params: ApiBoxesBoxIdMyReceiverGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantShortView>> {
    return apiBoxesBoxIdMyReceiverGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Возвращает информацию о пользователе, которого поздравляет текущий пользователь в указанной коробке.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdMyReceiverGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyReceiverGet(params: ApiBoxesBoxIdMyReceiverGet$Params, context?: HttpContext): Observable<ApiParticipantShortView> {
    return this.apiBoxesBoxIdMyReceiverGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantShortView>): ApiParticipantShortView => r.body)
    );
  }

  /** Path part for operation `apiBoxesBoxIdMyGiverGet()` */
  static readonly ApiBoxesBoxIdMyGiverGetPath = '/api/Boxes/{boxId}/my-giver';

  /**
   * Возвращает информацию о пользователе, который поздравлял текущего пользователя в указанной коробке.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdMyGiverGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyGiverGet$Plain$Response(params: ApiBoxesBoxIdMyGiverGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantShortView>> {
    return apiBoxesBoxIdMyGiverGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Возвращает информацию о пользователе, который поздравлял текущего пользователя в указанной коробке.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdMyGiverGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyGiverGet$Plain(params: ApiBoxesBoxIdMyGiverGet$Plain$Params, context?: HttpContext): Observable<ApiParticipantShortView> {
    return this.apiBoxesBoxIdMyGiverGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantShortView>): ApiParticipantShortView => r.body)
    );
  }

  /**
   * Возвращает информацию о пользователе, который поздравлял текущего пользователя в указанной коробке.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdMyGiverGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyGiverGet$Response(params: ApiBoxesBoxIdMyGiverGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantShortView>> {
    return apiBoxesBoxIdMyGiverGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Возвращает информацию о пользователе, который поздравлял текущего пользователя в указанной коробке.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdMyGiverGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdMyGiverGet(params: ApiBoxesBoxIdMyGiverGet$Params, context?: HttpContext): Observable<ApiParticipantShortView> {
    return this.apiBoxesBoxIdMyGiverGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantShortView>): ApiParticipantShortView => r.body)
    );
  }

  /** Path part for operation `apiBoxesBoxIdRandomizeParticipantsPost()` */
  static readonly ApiBoxesBoxIdRandomizeParticipantsPostPath = '/api/Boxes/{boxId}/randomize-participants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdRandomizeParticipantsPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdRandomizeParticipantsPost$Plain$Response(params: ApiBoxesBoxIdRandomizeParticipantsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxPairing>> {
    return apiBoxesBoxIdRandomizeParticipantsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdRandomizeParticipantsPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdRandomizeParticipantsPost$Plain(params: ApiBoxesBoxIdRandomizeParticipantsPost$Plain$Params, context?: HttpContext): Observable<ApiBoxPairing> {
    return this.apiBoxesBoxIdRandomizeParticipantsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxPairing>): ApiBoxPairing => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBoxesBoxIdRandomizeParticipantsPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdRandomizeParticipantsPost$Response(params: ApiBoxesBoxIdRandomizeParticipantsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBoxPairing>> {
    return apiBoxesBoxIdRandomizeParticipantsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBoxesBoxIdRandomizeParticipantsPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBoxesBoxIdRandomizeParticipantsPost(params: ApiBoxesBoxIdRandomizeParticipantsPost$Params, context?: HttpContext): Observable<ApiBoxPairing> {
    return this.apiBoxesBoxIdRandomizeParticipantsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBoxPairing>): ApiBoxPairing => r.body)
    );
  }

}
