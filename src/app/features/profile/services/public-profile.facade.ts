import { inject, Injectable, signal } from '@angular/core';
import { Observable, map, first, tap } from 'rxjs';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { AbstractProfileFacade } from './abstract-profile.facade';
import { ApiParticipantViewAdapter } from '@/app/core/adapters/api-participant-view.adapter';
import { IProfileData } from '../interfaces/iprofile-data';
import { FormControl } from '@angular/forms';

@Injectable()
export class PublicProfileFacade extends AbstractProfileFacade {
  private _apiParticipantViewAdapter = inject(ApiParticipantViewAdapter);

  protected override _profileTitle = signal<string>('Профиль');

  public init(id: string): Observable<IProfileData> {
    this._form.set(
      this._fb.group({
        about: new FormControl<string>(null),
      }),
    );

    return this.getUser(id).pipe(
      tap((user) => this._user.set(user)),
      tap(() => this._parseFormData()),
      map(() => {
        console.log('public', this._user());

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

  public getUser(id: string): Observable<IParticipantView | null> {
    return this._userApiService.idGet({ id }).pipe(
      first(),
      map((user) => this._apiParticipantViewAdapter.fromApi(user)),
    );
  }
}
