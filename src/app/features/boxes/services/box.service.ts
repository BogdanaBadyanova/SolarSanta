import { ICreateBox } from '@/app/features/boxes/features/create-box/interfaces/create-box';
import { inject, Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { ApiCreateBoxRequestAdapter } from '../features/create-box/adapters/api-create-box-request.adapter';
import { ApiBoxDetail, BoxesApiService } from '@/app/infrastructure';
import { IBoxDetails } from '../features/box-details/interfaces/idetail-box';
import { ApiBoxDetailAdapter } from '../features/box-details/adapters/api-box-detail.adapter';
import { IAddPaticipants } from '../features/box-details/interfaces/iadd-participats';
import { IParticipantShortInfo } from '../features/box-details/interfaces/iparticipant-short-info';
import { ApiParticipantShortInfoAdapter } from '../features/box-details/adapters/api-participant-short-info-adapter.service';

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
}
