import { FormFacade } from '@/app/core/services/form.facade';
import { UserApiService } from '@/app/infrastructure';
import { inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { IEditUserProfile } from '../interfaces/iedit-user-profile';
import { IProfileData } from '../interfaces/iprofile-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';

export abstract class AbstractProfileFacade extends FormFacade {
  protected _authService = inject(AuthService);
  protected _userApiService = inject(UserApiService);
  protected _fb = inject(FormBuilder);

  protected _user = signal<IParticipantView>(null);
  protected _canEditProfile = signal<boolean>(false);
  protected _profileTitle = signal<string>('');
  protected _form = signal<FormGroup>(null);

  public editProfile(): void {}

  protected _parseFormData(): void {
    this._form().patchValue(this._user());
    if (!this._canEditProfile()) this._form().disable();
  }

  public abstract init(id?: string): Observable<IProfileData>;
  protected abstract getUser(id?: string): Observable<IParticipantView | null>;
  public override submit(request?: IEditUserProfile): Observable<unknown> {
    return of(request);
  }
}
