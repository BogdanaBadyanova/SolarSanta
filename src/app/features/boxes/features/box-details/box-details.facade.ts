import { inject, Injectable } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Observable, switchMap, tap } from 'rxjs';
import { IBoxDetails } from './interfaces/idetail-box';
import { Urls } from '@/app/core/utils/urls';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { IAddPaticipants } from './interfaces/iadd-participats';
import { FormFacade } from '@/app/core/services/form.facade';
import { BoxToastEnum } from '../../enums/box-toast.enum';
import { IParticipantShortInfo } from './interfaces/iparticipant-short-info';

@Injectable({
  providedIn: 'root',
})
export class BoxDetailsFacade extends FormFacade {
  private _boxService = inject(BoxService);
  private _authService = inject(AuthService);
  public currentUser = this._authService.currentUser;

  public override submit(data: IAddPaticipants): Observable<IBoxDetails> {
    return this.addParticipant(data);
  }

  public getBoxData(id: string): Observable<IBoxDetails> {
    return this._boxService.getBoxData(id);
  }

  public deleteBox(id: string): Observable<string> {
    return this._boxService.deleteBox(id).pipe(
      tap(() => this._router.navigate(Urls.PROFILE_URL(this._authService.currentUser().id))),
      tap(() => this._toastService.showMessage(BoxToastEnum.DELETE_BOX_SUCCESS)),
    );
  }

  public addParticipant(body: IAddPaticipants): Observable<IBoxDetails> {
    return this._boxService.addParticipant(body).pipe(switchMap(() => this.getBoxData(body.id)));
  }

  public getMyReceiver(boxId: string): Observable<IParticipantShortInfo> {
    return this._boxService.getMyReceiver(boxId);
  }

  public getMyGiver(boxId: string): Observable<IParticipantShortInfo> {
    return this._boxService.getMyGiver(boxId);
  }

  public startGame(boxId: string): Observable<unknown> {
    return this._boxService.startGame(boxId);
  }
}
