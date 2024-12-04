import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ParticipantsComponent } from './components/participants/participants.component';
import { BoxDetailsFacade } from './box-details.facade';
import { first, Observable, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DateFormatPipe } from '@/app/core/pipe/date-format.pipe';
import { ImageModule } from 'primeng/image';
import { SantaInfoComponent } from './components/santa-info/santa-info.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IAddPaticipants } from './interfaces/iadd-participats';
import { IBoxDetails } from './interfaces/idetail-box';
import { TooltipModule } from 'primeng/tooltip';
import { IDialogPaticipant } from './interfaces/idialog-add-participat';
import { ConfirmPopup, ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { IParticipantShortInfo } from './interfaces/iparticipant-short-info';
import dayjs from 'dayjs';

@UntilDestroy()
@Component({
  selector: 'ss-box-details',
  standalone: true,
  imports: [
    ButtonModule,
    ParticipantsComponent,
    AsyncPipe,
    DateFormatPipe,
    ImageModule,
    SantaInfoComponent,
    TooltipModule,
    ConfirmPopupModule,
  ],
  templateUrl: './box-details.component.html',
  styleUrl: './box-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxDetailsComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _facade = inject(BoxDetailsFacade);
  private _confirmationService = inject(ConfirmationService);

  @ViewChild(ConfirmPopup)
  private _confirmPopup!: ConfirmPopup;
  public data$: Observable<IBoxDetails>;
  public myReceiver$: Observable<IParticipantShortInfo>;
  public myGiver$: Observable<IParticipantShortInfo>;
  public date: string;
  public boxId = '';
  public isSubmitButtonDisabled: Signal<boolean>;
  public submitButtonIcon: Signal<string>;
  public currentUser = this._facade.currentUser;

  public ngOnInit(): void {
    this.isSubmitButtonDisabled = this._facade.isSubmitButtonDisabled;
    this.submitButtonIcon = this._facade.submitButtonIcon;
    this.data$ = this._route.params.pipe(
      first(),
      tap((params) => (this.boxId = params['id'])),
      switchMap((params) => this._facade.getBoxData(params['id'])),
      tap((box) => {
        this.myReceiver$ = box.randomizationStarted ? this._facade.getMyReceiver(this.boxId) : of(null);
        this.myGiver$ = box.randomizationStarted && box.showResults ? this._facade.getMyGiver(this.boxId) : of(null);
        this.date = dayjs(box.meetingDate).add(1, 'day').fromNow(true);
      }),
      untilDestroyed(this),
    );
  }

  public getButtonTooltip(box: IBoxDetails): string {
    if (box.canStartRandomize) return '';
    if (box.randomizationStarted) return 'Вы уже запустили игру';
    if (box.isExpiredDate) return 'Вы просрали дату';

    return 'Дождитесь даты окончания приёма участников';
  }

  public acceptDelete(): void {
    this._confirmPopup.accept();
  }

  public rejectDelete(): void {
    this._confirmPopup.reject();
  }

  public confirmDelete(event: Event): void {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Вы точно хотите удалить коробку?',
      accept: () => {
        this._facade.deleteBox(this.boxId).pipe(untilDestroyed(this)).subscribe();
      },
    });
  }

  public addParticipant(data: IDialogPaticipant): void {
    const body: IAddPaticipants = {
      id: this.boxId,
      email: data.email,
    };
    this.data$ = this._facade.addParticipant(body);
  }

  public startGame(box: IBoxDetails): void {
    if (!box.randomizationStarted) {
      this._facade.startGame(this.boxId).pipe(untilDestroyed(this)).subscribe();
    }
  }
}
