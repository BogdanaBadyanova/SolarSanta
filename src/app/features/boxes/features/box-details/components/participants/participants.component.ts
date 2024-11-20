import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { Participant } from '../../interfaces/participant';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'ss-participants',
  standalone: true,
  imports: [SvgIconComponent, ButtonModule, ImageModule],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsComponent {
  public participants = input.required<Participant[]>();

  public get randomLogo(): string {
    const logos = Object.values(BoxLogoEnum);
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
  }
}
