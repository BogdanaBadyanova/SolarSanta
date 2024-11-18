import { FormFacade } from '@/app/core/services/form.facade';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISignInRequest } from '../../interfaces/isign-in-request';
import { combineLatest, finalize, Observable, tap, timer } from 'rxjs';
import { Urls } from '@/app/core/utils/urls';
import { AuthToastEnum } from '../../enums/auth-toast-enum';

@Injectable({
  providedIn: 'root',
})
export class SignInFacade extends FormFacade {
  private _authService = inject(AuthService);

  public override submit(data: ISignInRequest): Observable<unknown> {
    this.isLoading.set(true);
    return combineLatest([timer(600), this._authService.signIn(data)]).pipe(
      tap(() => this._toastService.showMessage(AuthToastEnum.SIGN_IN_SUCCESS)),
      tap(([, user]) => this._router.navigate(Urls.PROFILE_URL(user.id))),
      finalize(() => this.isLoading.set(false)),
    );
  }
}
