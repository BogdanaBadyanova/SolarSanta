import { ToastService } from '@/app/core/services/toast/toast.service';
import { Urls } from '@/app/core/utils/urls';
import { AuthToastEnum } from '@/app/features/auth/enums/auth-toast-enum';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { catchError, EMPTY, first, Observable, switchMap, tap } from 'rxjs';
import { ShareLinkFacade } from './share-link.facade';
import { IAddPaticipants } from '../box-details/interfaces/iadd-participats';

@UntilDestroy()
@Component({
  selector: 'ss-share-link',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './share-link.component.html',
  styleUrl: './share-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareLinkComponent implements OnInit {
  private _facade = inject(ShareLinkFacade);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _toastService = inject(ToastService);

  public ngOnInit(): void {
    let boxId: string;
    this._route.params
      .pipe(
        tap((params) => (boxId = params['id'])),
        tap(() => this._handleUnauthorized()),
        first(() => this._facade.isAuthenticated()),
        first((params) => {
          this._handleNoBoxId(boxId);
          return params['id'];
        }),
        switchMap(() => this._addParticipant(boxId)),
        tap(() => this._handleSuccessAdd(boxId)),
        catchError(() => {
          this._handleFailAdd();
          return EMPTY;
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  private _handleUnauthorized(): void {
    if (!this._facade.isAuthenticated()) {
      this._router.navigate(Urls.SIGN_IN_URL);
    }
  }

  private _handleNoBoxId(id: string): void {
    if (!id) {
      this._router.navigate(Urls.PROFILE_URL(this._facade.currentUser().id));
      this._toastService.showMessage(AuthToastEnum.AUTHORIZATION_REQUIRED);
    }
  }

  private _addParticipant(boxId: string): Observable<unknown> {
    const request: IAddPaticipants = {
      id: boxId,
      email: this._facade.currentUser().email,
    };

    return this._facade.addParticipant(request);
  }

  private _handleSuccessAdd(boxId: string): void {
    this._router.navigate(Urls.BOX_DETAILS_URL(boxId));
  }

  private _handleFailAdd(): void {
    this._router.navigate(Urls.INTRO_URL);
  }
}
