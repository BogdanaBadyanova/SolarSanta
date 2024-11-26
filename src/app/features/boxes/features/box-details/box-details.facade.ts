import { inject, Injectable } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Observable, tap } from 'rxjs';
import { IBoxDetails } from './interfaces/detail-box';
import { Router } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { AuthService } from '@/app/features/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BoxDetailsFacade {
  private _boxService = inject(BoxService);
  private _router = inject(Router);
  private _authService = inject(AuthService);

  public getBoxData(id: string): Observable<IBoxDetails> {
    return this._boxService.getBoxData(id);
  }

  public deleteBox(id: string): Observable<string> {
    return this._boxService
      .deleteBox(id)
      .pipe(tap(() => this._router.navigate(Urls.PROFILE_URL(this._authService.currentUser().id))));
  }
}
