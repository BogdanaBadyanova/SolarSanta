import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { ImageModule } from 'primeng/image';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IParticipantShortInfo } from '../../interfaces/iparticipant-short-info';
import { NgClass, SlicePipe } from '@angular/common';
import { ParticipantsListComponent } from '../participants-list/participants-list.component';
import { RouterLink } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { TooltipModule } from 'primeng/tooltip';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { ShareLinkComponent } from '../share-link/share-link.component';

@UntilDestroy()
@Component({
  selector: 'ss-participants',
  standalone: true,
  imports: [ButtonModule, ImageModule, DynamicDialogModule, SlicePipe, RouterLink, TooltipModule, NgClass, ShareLinkComponent],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsComponent {
  private _dialogService = inject(DialogService);

  public shareLink = input.required<string>();
  public participants = input.required<IParticipantShortInfo[]>();
  public isSubmitButtonDisabled = input.required<boolean>();
  public submitButtonIcon = input.required<string>();

  public currentUser = input.required<IParticipantView>();

  public addParticipant = output<string>();
  public Urls = Urls;

  private _ref: DynamicDialogRef | undefined;

  public randomParticipantsLogo = computed(() => this.participants().map(() => this.randomLogo()));

  public randomLogo(): string {
    const logos = Object.values(BoxLogoEnum);
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
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

  public isCurrentUser(participant: IParticipantShortInfo): boolean {
    return this.currentUser().id == participant.id;
  }
}
