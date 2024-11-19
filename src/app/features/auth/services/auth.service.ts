import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Router } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { CommonConstants } from '@/app/core/utils/common-constants';
import { ToastService } from '@core/services/toast/toast.service';
import { ICurrentUser } from '@core/interfaces/icurrent-user';
import { IAuthResult } from '@auth/interfaces/iauth-result';
import { catchError, first, iif, map, Observable, of, switchMap, tap } from 'rxjs';
import { ISignInRequest } from '@auth/interfaces/isign-in-request';
import { AuthToastEnum } from '@auth/enums/auth-toast-enum';
import { ISignUpRequest } from '@auth/interfaces/isign-up-request';
import { ApiApplicationUserAdapter } from '@/app/features/auth/adapters/api-application-user.adapter';
import { ApiSignInRequestAdapter } from '@/app/features/auth/adapters/api-sign-in-request.adapter';
import { ApiSignUpRequestAdapter } from '@/app/features/auth/adapters/api-sign-up-request.adapter';
import { AuthApiService } from '@/app/infrastructure';
import { ApiAuthResultAdapter } from '@/app/features/auth/adapters/api-auth-result.adapter';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _ls = inject(LocalStorageService);
  private _router = inject(Router);
  private _toastService = inject(ToastService);
  private _apiService = inject(AuthApiService);
  private _apiApplicationUserAdapter = inject(ApiApplicationUserAdapter);
  private _apiSignInRequestAdapter = inject(ApiSignInRequestAdapter);
  private _apiSignUpRequestAdapter = inject(ApiSignUpRequestAdapter);
  private _apiAuthResultAdapter = inject(ApiAuthResultAdapter);

  private _currentUser = signal<ICurrentUser>(null);
  private _currentUserClaims = signal<IAuthResult>(null);

  public isAuthenticated = computed(() => !!this._currentUser());

  public get currentUserClaims(): Signal<IAuthResult> {
    return this._currentUserClaims.asReadonly();
  }

  public get currentUser(): Signal<ICurrentUser> {
    return this._currentUser.asReadonly();
  }

  public init(): Observable<unknown> {
    return of(null).pipe(
      first(),
      tap(() => this._getCurrentUserClaims()),
      switchMap(() =>
        iif(
          () => !!this._currentUserClaims(),
          this._getCurrentUser(),
          of(null).pipe(tap(() => this._router.navigate(Urls.SIGN_IN_URL))),
        ),
      ),
      untilDestroyed(this),
    );
  }

  public signIn(request: ISignInRequest): Observable<ICurrentUser | null> {
    const dto = this._apiSignInRequestAdapter.toApi(request);
    return this._apiService.apiAuthLoginPost({ body: dto }).pipe(
      first(),
      catchError((response: { error: string[] }) => {
        const message = response.error.join('. ');
        this._toastService.showMessage(AuthToastEnum.SIGN_IN_FAILED, {
          detail: message,
        });
        throw new Error(message);
      }),
      map((response) => this._apiAuthResultAdapter.fromApi(response)),
      tap((data: IAuthResult) => this._currentUserClaims.set(data)),
      tap((data: IAuthResult) => {
        this._ls.setItem(CommonConstants.userClaimsLocalStorageKey, JSON.stringify(data));
      }),
      switchMap(() => this._getCurrentUser()),
      untilDestroyed(this),
    );
  }

  public signUp(request: ISignUpRequest): Observable<boolean> {
    const dto = this._apiSignUpRequestAdapter.toApi(request);
    return this._apiService.apiAuthRegisterPost({ body: dto }).pipe(
      first(),
      catchError((response: { error: string[] }) => {
        const message = response.error.join('. ');
        this._toastService.showMessage(AuthToastEnum.SIGN_UP_FAILED, {
          detail: message,
        });
        throw new Error(message);
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

  private _getCurrentUser(): Observable<ICurrentUser | null> {
    return this._apiService.apiAuthCurrentUserGet().pipe(
      first(),
      map((user) => this._apiApplicationUserAdapter.fromApi(user)),
      tap((user: ICurrentUser) => this._currentUser.set(user)),
      untilDestroyed(this),
    );
  }
}
