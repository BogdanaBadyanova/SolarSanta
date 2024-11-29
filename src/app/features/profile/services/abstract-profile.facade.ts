import { FormFacade } from '@/app/core/services/form.facade';
import { UserApiService } from '@/app/infrastructure';
import { inject, signal } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { IEditUserProfile } from '../interfaces/iedit-user-profile';
import { IProfileData } from '../interfaces/iprofile-data';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export abstract class AbstractProfileFacade extends FormFacade {
  protected _userApiService = inject(UserApiService);
  protected _fb = inject(FormBuilder);

  protected _user = signal<IParticipantView>(null);
  protected _canEditProfile = signal<boolean>(false);
  protected _profileTitle = signal<string>('');
  protected _form = signal<FormGroup>(null);

  public init(id?: string): Observable<IProfileData> {
    this._form.set(
      this._fb.group({
        about: new FormControl<string>(null),
        interests: new FormControl<string[]>([]),
      }),
    );

    return this.getUser(id).pipe(
      tap((user) => this._user.set(user)),
      tap(() => this._parseFormData()),
      map(() => {
        return {
          form: this._form.asReadonly(),
          user: this._user.asReadonly(),
          canEditProfile: this._canEditProfile.asReadonly(),
          profileTitle: this._profileTitle.asReadonly(),
          submitButtonIcon: this.submitButtonIcon,
          isSubmitButtonDisabled: this.isSubmitButtonDisabled,
        };
      }),
    );
  }

  private _parseFormData(): void {
    this._form().patchValue({
      ...this._user(),
      interests: this._user().interests.map((i) => i.title),
    });
    if (!this._canEditProfile()) this._form().disable();
  }

  protected abstract getUser(id?: string): Observable<IParticipantView | null>;
  public override submit(request?: IEditUserProfile): Observable<unknown> {
    return of(request);
  }
}
