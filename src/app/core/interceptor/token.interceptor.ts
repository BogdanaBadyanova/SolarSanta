import {
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { CommonConstants } from '../utils/common-constants';
import { AuthService } from '@/app/features/auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private _ls = inject(LocalStorageService);
  private _authService = inject(AuthService);

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const claims = this._authService.currentUserClaims();
    const lsClaims = this._ls.getItem(CommonConstants.userClaimsLocalStorageKey);

    const token = claims?.token || (lsClaims ? JSON.parse(lsClaims)?.token : '');

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Token Interceptor Error:', error);
        return throwError(() => error);
      }),
    );
  }
}
