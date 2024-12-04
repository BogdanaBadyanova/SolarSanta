import { inject, Injectable, signal } from '@angular/core';
import { filter, finalize, first, map, Observable, of, switchMap, tap } from 'rxjs';
import { ApiUpdateUserRequestAdapter } from '../adapters/api-update-user-request.adapter';
import { IEditUserProfile } from '../interfaces/iedit-user-profile';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { AbstractProfileFacade } from './abstract-profile.facade';
import { DialogService } from 'primeng/dynamicdialog';
import { EditFormComponent } from '../components/edit-form/edit-form.component';
import { IProfileData } from '../interfaces/iprofile-data';
import { FormControl } from '@angular/forms';

@Injectable()
export class PersonalProfileFacade extends AbstractProfileFacade {
  private _dialogService = inject(DialogService);
  private _apiUpdateUserRequestAdapter = inject(ApiUpdateUserRequestAdapter);

  public override _canEditProfile = signal<boolean>(true);
  protected override _profileTitle = signal<string>('Мой профиль');

  public getUser(): Observable<IParticipantView | null> {
    return of(this._authService.currentUser());
  }

  public init(): Observable<IProfileData> {
    this._form.set(
      this._fb.group({
        about: new FormControl<string>(null),
      }),
    );

    return this.getUser().pipe(
      tap((user) => this._user.set(user)),
      tap(() => this._parseFormData()),
      map(() => {
        console.log('cuurent', this._user());

        return {
          form: this._form.asReadonly(),
          user: this._authService.currentUser,
          canEditProfile: this._canEditProfile.asReadonly(),
          profileTitle: this._profileTitle.asReadonly(),
          submitButtonIcon: this.submitButtonIcon,
          isSubmitButtonDisabled: this.isSubmitButtonDisabled,
        };
      }),
    );
  }

  public override editProfile(): void {
    const dialogRef = this._dialogService.open(EditFormComponent, {
      header: 'Редактирование профиля',
      contentStyle: {
        'padding-top': '25px',
      },
      data: {
        user: this._authService.currentUser(),
      },
    });

    dialogRef.onClose
      .pipe(
        first(),
        filter((data: IEditUserProfile | null) => !!data),
        switchMap((data) => {
          const body = this._apiUpdateUserRequestAdapter.toApi(data);
          return this._userApiService.updatePut({ body });
        }),
        switchMap(() => this._authService.getCurrentUser()),
      )
      .subscribe();
  }

  public override submit(request: IEditUserProfile): Observable<unknown> {
    this.isLoading.set(true);
    const editProfileDto = this._apiUpdateUserRequestAdapter.toApi(request);

    return this._userApiService.updatePut({ body: editProfileDto }).pipe(finalize(() => this.isLoading.set(false)));
  }
}
