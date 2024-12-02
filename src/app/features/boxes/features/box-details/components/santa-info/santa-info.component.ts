import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { Observable } from 'rxjs';
import { IParticipantShortInfo } from '../../interfaces/iparticipant-short-info';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { GenderPipe } from '@/app/core/pipe/gender.pipe';

@Component({
  selector: 'ss-santa-info',
  standalone: true,
  imports: [SvgIconComponent, AsyncPipe, GenderPipe, NgTemplateOutlet],
  templateUrl: './santa-info.component.html',
  styleUrl: './santa-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SantaInfoComponent {
  public myGiver$ = input.required<Observable<IParticipantShortInfo>>();
  public myReceiver$ = input.required<Observable<IParticipantShortInfo>>();
  public date = input.required<string>();
}
