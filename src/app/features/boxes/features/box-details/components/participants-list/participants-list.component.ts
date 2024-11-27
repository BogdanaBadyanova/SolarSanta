import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { IParticipantShortInfo } from '../../interfaces/iparticipant-short-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ss-participants-list',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './participants-list.component.html',
  styleUrl: './participants-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsListComponent {
  private _dialogConfig = inject(DynamicDialogConfig);

  public participants: Signal<IParticipantShortInfo[]> = this._dialogConfig.data.participants;
}
