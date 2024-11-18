import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { ParticipantsComponent } from './components/participants/participants.component';

@Component({
  selector: 'ss-box-details',
  standalone: true,
  imports: [SvgIconComponent, ButtonModule, ParticipantsComponent],
  templateUrl: './box-details.component.html',
  styleUrl: './box-details.component.scss',
})
export class BoxDetailsComponent {}
