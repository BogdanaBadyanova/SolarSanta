import { ICreateBox } from '@/app/features/boxes/features/create-box/interfaces/create-box';
import { inject, Injectable } from '@angular/core';
import { first, map, Observable, of } from 'rxjs';
import { ApiCreateBoxRequestAdapter } from '../features/create-box/adapters/api-create-box-request.adapter';
import { ApiBoxDetail, BoxesApiService } from '@/app/infrastructure';
import { IBoxDetails } from '../features/box-details/interfaces/idetail-box';
import { ApiBoxDetailAdapter } from '../features/box-details/adapters/api-box-detail.adapter';
import { IAddPaticipants } from '../features/box-details/interfaces/iadd-participats';
import { IParticipantShortInfo } from '../features/box-details/interfaces/iparticipant-short-info';
import { ApiParticipantShortInfoAdapter } from '../features/box-details/adapters/api-participant-short-info-adapter.service';
import { PaginatedResponse } from '@/app/core/interfaces/paginated-response.model';
import { IBoxView } from '../features/my-boxes/interfaces/ibox-view';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { IBoxesFiltersRequest } from '../features/my-boxes/interfaces/ibox-filter-request';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private _apiCreateBoxRequestAdapter = inject(ApiCreateBoxRequestAdapter);
  private _apiBoxDetailAdapter = inject(ApiBoxDetailAdapter);
  private _boxesApiService = inject(BoxesApiService);
  private _apiParticipantShortInfoAdapter = inject(ApiParticipantShortInfoAdapter);

  public createBox(request: ICreateBox): Observable<unknown> {
    const dto = this._apiCreateBoxRequestAdapter.toApi(request);
    return this._boxesApiService.apiBoxesPost({ body: dto }).pipe(first());
  }

  public deleteBox(id: string): Observable<string> {
    return this._boxesApiService.apiBoxesIdDelete({ id }).pipe(first());
  }

  public getBoxData(id: string): Observable<IBoxDetails> {
    return this._boxesApiService.apiBoxesIdGet({ id }).pipe(
      first(),
      map((response: ApiBoxDetail) => this._apiBoxDetailAdapter.fromApi(response)),
    );
  }

  public addParticipant(body: IAddPaticipants): Observable<string> {
    return this._boxesApiService.apiBoxesBoxIdAddParticipantPost({ boxId: body.id, email: body.email }).pipe(first());
  }

  public getMyReceiver(boxId: string): Observable<IParticipantShortInfo> {
    return this._boxesApiService.apiBoxesBoxIdMyReceiverGet({ boxId }).pipe(
      first(),
      map((response) => this._apiParticipantShortInfoAdapter.fromApi(response)),
    );
  }

  public getMyGiver(boxId: string): Observable<IParticipantShortInfo> {
    return this._boxesApiService.apiBoxesBoxIdMyGiverGet({ boxId }).pipe(
      first(),
      map((response) => this._apiParticipantShortInfoAdapter.fromApi(response)),
    );
  }

  public startGame(boxId: string): Observable<unknown> {
    return this._boxesApiService.apiBoxesBoxIdRandomizeParticipantsPost({ boxId }).pipe(first());
  }

  public getBoxes(request: IBoxesFiltersRequest): Observable<PaginatedResponse<IBoxView>> {
    return of({
      items: [
        {
          id: '1',
          idCode: 'ABC123',
          name: 'Box 1',
          description: 'Description for Box 1',
          icon: BoxLogoEnum.Gift,
          inviteEndDate: '2026-12-31T00:00:00Z',
          meetingDate: '2026-12-31T00:00:00Z',
          minGiftValue: 10,
          maxGiftValue: 50,
          location: 'Location 1',
        },
        {
          id: '2',
          idCode: 'DEF456',
          name: 'Box 2',
          description: 'Description for Box 2',
          icon: BoxLogoEnum.Bag,
          inviteEndDate: '2026-12-31T00:00:00Z',
          meetingDate: '2026-12-31T00:00:00Z',
          minGiftValue: 20,
          maxGiftValue: 100,
          location: 'Location 2',
        },
        {
          id: '1',
          idCode: 'ABC123',
          name: 'Box 1',
          description: 'Description for Box 1',
          icon: BoxLogoEnum.Gift,
          inviteEndDate: '2026-12-31T00:00:00Z',
          meetingDate: '2026-12-31T00:00:00Z',
          minGiftValue: 10,
          maxGiftValue: 50,
          location: 'Location 1',
        },
        {
          id: '2',
          idCode: 'DEF456',
          name: 'Box 2',
          description: 'Description for Box 2',
          icon: BoxLogoEnum.Bag,
          inviteEndDate: '2026-12-31T00:00:00Z',
          meetingDate: '2026-12-31T00:00:00Z',
          minGiftValue: 20,
          maxGiftValue: 100,
          location: 'Location 2',
        },
        {
          id: '1',
          idCode: 'ABC123',
          name: 'Box 1',
          description: 'Description for Box 1',
          icon: BoxLogoEnum.Gift,
          inviteEndDate: '2026-12-31T00:00:00Z',
          meetingDate: '2026-12-31T00:00:00Z',
          minGiftValue: 10,
          maxGiftValue: 50,
          location: 'Location 1',
        },
        {
          id: '2',
          idCode: 'DEF456',
          name: 'Box 2',
          description: 'Description for Box 2',
          icon: BoxLogoEnum.Bag,
          inviteEndDate: '2026-12-31T00:00:00Z',
          meetingDate: '2026-12-31T00:00:00Z',
          minGiftValue: 20,
          maxGiftValue: 100,
          location: 'Location 2',
        },
      ],
      totalCount: 6,
    });
  }
}
