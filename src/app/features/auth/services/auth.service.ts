import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Router } from '@angular/router';
import { UrlsService } from '@core/services/urls.service';
import { CommonConstants } from '@core/services/common-constants';
import { ToastService } from '@core/services/toast/toast.service';
import { ICurrentUser } from '@core/interfaces/icurrent-user';
import { IAuthResult } from '@auth/interfaces/iauth-result';
import { catchError, first, iif, map, Observable, of, switchMap, tap } from 'rxjs';
import { ISignInRequest } from '@auth/interfaces/isign-in-request';
import { AuthToastEnum } from '@auth/enums/auth-toast-enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ISignUpRequest } from '@auth/interfaces/isign-up-request';
import { ApiCurrentUserAdapter } from '@/app/core/adapters/api-current-user.adapter';
import { AuthApiService } from '@/app/infrastructure/services/auth-api.service';
import { ApiSignInRequestAdapter } from '@/app/core/adapters/api-sign-in-request.adapter';
import { ApiSignUpRequestAdapter } from '@/app/core/adapters/api-sign-up-request.adapter';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _ls = inject(LocalStorageService);
  private _router = inject(Router);
  private _urls = inject(UrlsService);
  private _constants = inject(CommonConstants);
  private _toastService = inject(ToastService);
  private _apiService = inject(AuthApiService);
  private _apiCurrentUserAdapter = inject(ApiCurrentUserAdapter);
  private _apiSignInRequestAdapter = inject(ApiSignInRequestAdapter);
  private _apiSignUpRequestAdapter = inject(ApiSignUpRequestAdapter);

  private _currentUser = signal<ICurrentUser>(null);
  private _currentUserClaims = signal<IAuthResult>(null);

  public isAuthenticated = computed(() => !!this._currentUser());

  public get currentUserClaims(): Signal<IAuthResult> {
    return this._currentUserClaims.asReadonly();
  }

  public get currentUser(): Signal<ICurrentUser> {
    return this._currentUser.asReadonly();
  }

  public init() {
    return of(null).pipe(
      first(),
      tap(() => this._getCurrentUserClaims()),
      switchMap(() =>
        iif(
          () => !!this._currentUserClaims(),
          this._getCurrentUser(),
          of(null).pipe(tap(() => this._router.navigate(this._urls.SIGN_IN_URL))),
        ),
      ),
    );
  }

  public signIn(request: ISignInRequest): Observable<unknown> {
    const dto = this._apiSignInRequestAdapter.toApi(request);
    return this._apiService.signIn(dto).pipe(
      first(),
      catchError((response: { error: string[] }) => {
        const message = response.error.join('. ');
        this._toastService.showMessage(AuthToastEnum.SIGN_IN_FAILED, {
          detail: message,
        });
        throw new Error(message);
      }),
      tap(() => this._toastService.showMessage(AuthToastEnum.SIGN_IN_SUCCESS)),
      tap((data: IAuthResult) => this._currentUserClaims.set(data)),
      tap((data: IAuthResult) => {
        this._ls.setItem(this._constants.userClaimsLocalStorageKey, JSON.stringify(data));
      }),
      switchMap(() => this._getCurrentUser()),
      tap(() => this._router.navigate(this._urls.INTRO_URL)),
      takeUntilDestroyed(),
    );
  }

  public signUp(request: ISignUpRequest): Observable<boolean> {
    const dto = this._apiSignUpRequestAdapter.toApi(request);
    return this._apiService.signUp(dto).pipe(
      first(),
      catchError((response: { error: string[] }) => {
        const message = response.error.join('. ');
        this._toastService.showMessage(AuthToastEnum.SIGN_UP_FAILED, {
          detail: message,
        });
        throw new Error(message);
      }),
      tap(() => this._toastService.showMessage(AuthToastEnum.SIGN_UP_SUCCESS)),
      tap(() => this._router.navigate(this._urls.SIGN_IN_URL)),
      takeUntilDestroyed(),
    );
  }

  public logout() {
    this._currentUser.set(null);
    this._currentUserClaims.set(null);
    this._ls.removeItem(this._constants.userClaimsLocalStorageKey);
    this._router.navigate(this._urls.SIGN_IN_URL);
  }

  private _getCurrentUserClaims(): void {
    const claimsString = this._ls.getItem(this._constants.userClaimsLocalStorageKey);
    const claims = claimsString ? (JSON.parse(claimsString) as IAuthResult) : null;

    if (claims?.token) {
      this._currentUserClaims.set(claims);
    }
  }

  private _getCurrentUser(): Observable<ICurrentUser | null> {
    return this._apiService.getCurrentUser().pipe(
      first(),
      map((user) => this._apiCurrentUserAdapter.fromApi(user)),
      tap((user: ICurrentUser) => this._currentUser.set(user)),
      takeUntilDestroyed(),
    );
  }
}
