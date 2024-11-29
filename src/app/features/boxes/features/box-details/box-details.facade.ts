import { inject, Injectable } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { first, Observable, switchMap, tap } from 'rxjs';
import { IBoxDetails } from './interfaces/idetail-box';
import { Urls } from '@/app/core/utils/urls';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { IAddPaticipants } from './interfaces/iadd-participats';
import { FormFacade } from '@/app/core/services/form.facade';

@Injectable({
  providedIn: 'root',
})
export class BoxDetailsFacade extends FormFacade {
  private _boxService = inject(BoxService);
  private _authService = inject(AuthService);

  public override submit(data: IAddPaticipants): Observable<IBoxDetails> {
    return this.addParticipant(data).pipe(first());
  }

  public getBoxData(id: string): Observable<IBoxDetails> {
    return this._boxService.getBoxData(id).pipe(first());
  }

  public deleteBox(id: string): Observable<string> {
    return this._boxService.deleteBox(id).pipe(
      first(),
      tap(() => this._router.navigate(Urls.PROFILE_URL(this._authService.currentUser().id))),
    );
  }

  public addParticipant(body: IAddPaticipants): Observable<IBoxDetails> {
    return this._boxService.addParticipant(body).pipe(
      first(),
      switchMap(() => this.getBoxData(body.id)),
    );
  }
}
