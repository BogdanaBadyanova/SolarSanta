import { FormFacade } from '@/app/core/services/form.facade';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISignInRequest } from '../../interfaces/isign-in-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInFacade extends FormFacade {
  private _authService = inject(AuthService);

  public override submit(data: ISignInRequest): Observable<unknown> {
    return this._authService.signIn(data);
  }
}
