import { FormFacade } from '@/app/core/services/form.facade';
import { UserApiService } from '@/app/infrastructure';
import { inject, Injectable } from '@angular/core';
import { finalize, forkJoin, Observable } from 'rxjs';
import { ApiUpdateUserRequestAdapter } from '../adapters/api-update-user-request.adapter';
import { IUpdateUserRequest } from '../interfaces/iupdate-user-request';
import { AuthService } from '../../auth/services/auth.service';
import { IEditUserProfile } from '../interfaces/iedit-user-profile';
import { IInterestCreateRequest } from '../interfaces/iinterest-create-request';
import { ApiInterestCreateRequestAdapter } from '../adapters/api-interest-create-request.adapter';

@Injectable({
  providedIn: 'root',
})
export class ProfileFacade extends FormFacade {
  public _authService = inject(AuthService);

  private _userApiService = inject(UserApiService);
  private _apiUpdateUserRequestAdapter = inject(ApiUpdateUserRequestAdapter);
  private _apiInterestCreateRequestAdapter = inject(ApiInterestCreateRequestAdapter);

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

    const addInterestsDto =
      this._apiInterestCreateRequestAdapter.arrayToApi(createInterestsRequests);

    return forkJoin([
      this._userApiService.updatePut({ body: editProfileDto }),
      this._userApiService.addInterestsPost({ body: addInterestsDto }),
    ]).pipe(finalize(() => this.isLoading.set(false)));
  }
}
