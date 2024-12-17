import { inject, Injectable } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Observable } from 'rxjs';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { IAddPaticipants } from '../box-details/interfaces/iadd-participats';

@Injectable({
  providedIn: 'root',
})
export class ShareLinkFacade {
  private _boxService = inject(BoxService);
  private _authService = inject(AuthService);
  public currentUser = this._authService.currentUser;
  public isAuthenticated = this._authService.isAuthenticated;

  public addParticipant(body: IAddPaticipants): Observable<unknown> {
    return this._boxService.addParticipant(body);
  }
}
