import { inject, Injectable, signal } from '@angular/core';
import { finalize, forkJoin, Observable, of } from 'rxjs';
import { ApiUpdateUserRequestAdapter } from '../adapters/api-update-user-request.adapter';
import { IUpdateUserRequest } from '../interfaces/iupdate-user-request';
import { AuthService } from '../../auth/services/auth.service';
import { IEditUserProfile } from '../interfaces/iedit-user-profile';
import { IInterestCreateRequest } from '../interfaces/iinterest-create-request';
import { ApiInterestCreateRequestAdapter } from '../adapters/api-interest-create-request.adapter';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { AbstractProfileFacade } from './abstract-profile.facade';

@Injectable()
export class PersonalProfileFacade extends AbstractProfileFacade {
  private _authService = inject(AuthService);
  private _apiUpdateUserRequestAdapter = inject(ApiUpdateUserRequestAdapter);
  private _apiInterestCreateRequestAdapter = inject(ApiInterestCreateRequestAdapter);

  public override _canEditProfile = signal<boolean>(true);
  protected override _profileTitle = signal<string>('Мой профиль');

  public getUser(): Observable<IParticipantView | null> {
    return of(this._authService.currentUser());
  }

  public override submit(request: IEditUserProfile): Observable<unknown> {
    this.isLoading.set(true);
    const editProfileRequest: IUpdateUserRequest = {
      aboutMe: request.about,
    };
    const editProfileDto = this._apiUpdateUserRequestAdapter.toApi(editProfileRequest);

    const createInterestsRequests: IInterestCreateRequest[] = request.interests.map((i) => {
      return {
        title: i,
      };
    });

    const addInterestsDto = this._apiInterestCreateRequestAdapter.arrayToApi(createInterestsRequests);

    return forkJoin([
      this._userApiService.updatePut({ body: editProfileDto }),
      this._userApiService.addInterestsPost({ body: addInterestsDto }),
    ]).pipe(finalize(() => this.isLoading.set(false)));
  }
}
