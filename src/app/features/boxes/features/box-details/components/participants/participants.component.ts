import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { ImageModule } from 'primeng/image';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddParticipantDialogComponent } from '../add-participant-dialog/add-participant-dialog.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { untilDestroyed } from '@ngneat/until-destroy';
import { first, tap } from 'rxjs';
import { IParticipantShortInfo } from '../../interfaces/iparticipant-short-info';
import { IDialogPaticipant } from '../../interfaces/idialog-add-participat';
import { SlicePipe } from '@angular/common';
import { ParticipantsListComponent } from '../participants-list/participants-list.component';
import { RouterLink } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { TooltipModule } from 'primeng/tooltip';

@UntilDestroy()
@Component({
  selector: 'ss-participants',
  standalone: true,
  imports: [SvgIconComponent, ButtonModule, ImageModule, DynamicDialogModule, SlicePipe, RouterLink, TooltipModule],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsComponent {
  private _dialogService = inject(DialogService);

  public participants = input.required<IParticipantShortInfo[]>();
  public isSubmitButtonDisabled = input.required<boolean>();
  public submitButtonIcon = input.required<string>();
  public addParticipant = output<IDialogPaticipant>();
  public Urls = Urls;

  private _ref: DynamicDialogRef | undefined;

  public get randomLogo(): string {
    const logos = Object.values(BoxLogoEnum);
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
  }

  public show(): void {
    this._ref = this._dialogService.open(AddParticipantDialogComponent, {
      header: 'Добавьте участника',
      data: {
        isSubmitButtonDisabled: this.isSubmitButtonDisabled,
        submitButtonIcon: this.submitButtonIcon,
      },
    });

    this._ref.onClose
      .pipe(
        first((value) => !!value),
        tap((data: IDialogPaticipant) => this.addParticipant.emit(data)),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public showListParticipants(): void {
    this._dialogService.open(ParticipantsListComponent, {
      header: 'Список участников',
      width: '70%',
      data: {
        participants: this.participants,
      },
    });
  }
}
