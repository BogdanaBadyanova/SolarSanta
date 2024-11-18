import { FormFacade } from '@/app/core/services/form.facade';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISignInRequest } from '../../interfaces/isign-in-request';
import { combineLatest, finalize, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInFacade extends FormFacade {
  private _authService = inject(AuthService);

  public override submit(data: ISignInRequest): Observable<unknown> {
    this.isLoading.set(true);
    return combineLatest([timer(600), this._authService.signIn(data)]).pipe(
      finalize(() => this.isLoading.set(false)),
    );
  }
}
