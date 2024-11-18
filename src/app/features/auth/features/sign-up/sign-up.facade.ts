import { FormFacade } from '@/app/core/services/form.facade';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISignUpRequest } from '../../interfaces/isign-up-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpFacade extends FormFacade {
  private _authService = inject(AuthService);

  public override submit(data: ISignUpRequest): Observable<unknown> {
    return this._authService.signUp(data);
  }
}
