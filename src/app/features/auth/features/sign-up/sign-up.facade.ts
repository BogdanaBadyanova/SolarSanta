import { FormFacade } from '@/app/core/services/form.facade';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISignUpRequest } from '../../interfaces/isign-up-request';
import { combineLatest, finalize, Observable, tap, timer } from 'rxjs';
import { AuthToastEnum } from '../../enums/auth-toast-enum';
import { Urls } from '@/app/core/utils/urls';

@Injectable({
  providedIn: 'root',
})
export class SignUpFacade extends FormFacade {
  private _authService = inject(AuthService);

  public override submit(data: ISignUpRequest): Observable<unknown> {
    this.isLoading.set(true);
    return combineLatest([timer(600), this._authService.signUp(data)]).pipe(
      tap(() => this._toastService.showMessage(AuthToastEnum.SIGN_UP_SUCCESS)),
      tap(() => this._router.navigate(Urls.SIGN_IN_URL)),
      finalize(() => this.isLoading.set(false)),
    );
  }
}
