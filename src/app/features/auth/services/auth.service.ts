import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Router } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { CommonConstants } from '@/app/core/utils/common-constants';
import { ToastService } from '@core/services/toast/toast.service';
import { IParticipantView } from '@core/interfaces/iparticipant-view';
import { IAuthResult } from '@auth/interfaces/iauth-result';
import { catchError, EMPTY, first, iif, map, Observable, of, switchMap, tap } from 'rxjs';
import { ISignInRequest } from '@auth/interfaces/isign-in-request';
import { AuthToastEnum } from '@auth/enums/auth-toast-enum';
import { ISignUpRequest } from '@auth/interfaces/isign-up-request';
import { ApiSignInRequestAdapter } from '@/app/features/auth/adapters/api-sign-in-request.adapter';
import { ApiSignUpRequestAdapter } from '@/app/features/auth/adapters/api-sign-up-request.adapter';
import { AuthApiService, UserApiService } from '@/app/infrastructure';
import { ApiAuthResultAdapter } from '@/app/features/auth/adapters/api-auth-result.adapter';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApiParticipantViewAdapter } from '@/app/core/adapters/api-participant-view.adapter';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _ls = inject(LocalStorageService);
  private _router = inject(Router);
  private _toastService = inject(ToastService);
  private _apiService = inject(AuthApiService);
  private _apiParticipantViewAdapter = inject(ApiParticipantViewAdapter);
  private _apiSignInRequestAdapter = inject(ApiSignInRequestAdapter);
  private _apiSignUpRequestAdapter = inject(ApiSignUpRequestAdapter);
  private _apiAuthResultAdapter = inject(ApiAuthResultAdapter);
  private _userApiService = inject(UserApiService);

  private _currentUser = signal<IParticipantView>(undefined);
  private _currentUserClaims = signal<IAuthResult>(null);

  public isAuthenticated = computed(() => !!this._currentUser());

  public get currentUserClaims(): Signal<IAuthResult> {
    return this._currentUserClaims.asReadonly();
  }

  public get currentUser(): Signal<IParticipantView> {
    return this._currentUser.asReadonly();
  }

  public init(): Observable<unknown> {
    return of(null).pipe(
      first(),
      tap(() => this._getCurrentUserClaims()),
      switchMap(() =>
        iif(
          () => !!this._currentUserClaims(),
          this.getCurrentUser(),
          of(null).pipe(
            tap(() => this._currentUser.set(null)),
            tap(() => this._router.navigate(Urls.SIGN_IN_URL)),
          ),
        ),
      ),
      untilDestroyed(this),
    );
  }

  public signIn(request: ISignInRequest): Observable<IParticipantView | null> {
    const dto = this._apiSignInRequestAdapter.toApi(request);
    return this._apiService.apiAuthLoginPost({ body: dto }).pipe(
      first(),
      catchError(() => {
        this._toastService.showMessage(AuthToastEnum.SIGN_IN_FAILED);
        throw new Error();
      }),
      map((response) => this._apiAuthResultAdapter.fromApi(response)),
      tap((data: IAuthResult) => this._currentUserClaims.set(data)),
      tap((data: IAuthResult) => {
        this._ls.setItem(CommonConstants.userClaimsLocalStorageKey, JSON.stringify(data));
      }),
      switchMap(() => this.getCurrentUser()),
      untilDestroyed(this),
    );
  }

  public signUp(request: ISignUpRequest): Observable<string> {
    const dto = this._apiSignUpRequestAdapter.toApi(request);
    return this._apiService.apiAuthRegisterPost({ body: dto }).pipe(
      first(),
      catchError(() => {
        this._toastService.showMessage(AuthToastEnum.SIGN_UP_FAILED);
        throw new Error();
      }),
      untilDestroyed(this),
    );
  }

  public logout(): void {
    this._currentUser.set(null);
    this._currentUserClaims.set(null);
    this._ls.removeItem(CommonConstants.userClaimsLocalStorageKey);
    this._router.navigate(Urls.SIGN_IN_URL);
  }

  private _getCurrentUserClaims(): void {
    const claimsString = this._ls.getItem(CommonConstants.userClaimsLocalStorageKey);
    const claims = claimsString ? (JSON.parse(claimsString) as IAuthResult) : null;

    if (claims?.token) {
      this._currentUserClaims.set(claims);
    }
  }

  public getCurrentUser(): Observable<IParticipantView | null> {
    return this._userApiService.currentUserGet().pipe(
      first(),
      map((user) => this._apiParticipantViewAdapter.fromApi(user)),
      tap((user: IParticipantView) => this._currentUser.set(user)),
      catchError(() => {
        this._currentUser.set(null);
        return EMPTY;
      }),
      untilDestroyed(this),
    );
  }
}
