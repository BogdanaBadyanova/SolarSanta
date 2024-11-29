import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ParticipantsComponent } from './components/participants/participants.component';
import { BoxDetailsFacade } from './box-details.facade';
import { first, Observable, switchMap, tap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { DateFormatPipe } from '@/app/core/pipe/date-format.pipe';
import { ImageModule } from 'primeng/image';
import { SantaInfoComponent } from './components/santa-info/santa-info.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IAddPaticipants } from './interfaces/iadd-participats';
import { IBoxDetails } from './interfaces/idetail-box';
import { TooltipModule } from 'primeng/tooltip';
import { IDialogPaticipant } from './interfaces/idialog-add-participat';

@UntilDestroy()
@Component({
  selector: 'ss-box-details',
  standalone: true,
  imports: [ButtonModule, ParticipantsComponent, NgIf, AsyncPipe, DateFormatPipe, ImageModule, SantaInfoComponent, TooltipModule],
  templateUrl: './box-details.component.html',
  styleUrl: './box-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxDetailsComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _boxDetailsFacade = inject(BoxDetailsFacade);

  public data$: Observable<IBoxDetails>;
  public boxId = '';
  public isSubmitButtonDisabled: Signal<boolean>;
  public submitButtonIcon: Signal<string>;

  public ngOnInit(): void {
    this.isSubmitButtonDisabled = this._boxDetailsFacade.isSubmitButtonDisabled;
    this.submitButtonIcon = this._boxDetailsFacade.submitButtonIcon;
    this.data$ = this._route.params.pipe(
      first(),
      tap((params) => (this.boxId = params['id'])),
      switchMap((params) => this._boxDetailsFacade.getBoxData(params['id'])),
      untilDestroyed(this),
    );
  }

  public getButtonTooltip(box: IBoxDetails): string {
    return box.isExpiredDate ? 'Вы просрали дату' : '';
  }

  public deletebox(): void {
    this._boxDetailsFacade.deleteBox(this.boxId).pipe(untilDestroyed(this)).subscribe();
  }

  public addParticipant(data: IDialogPaticipant): void {
    const body: IAddPaticipants = {
      id: this.boxId,
      email: data.email,
    };
    this.data$ = this._boxDetailsFacade.addParticipant(body).pipe(first(), untilDestroyed(this));
  }
}
