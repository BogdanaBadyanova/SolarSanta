import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Urls } from '../../core/utils/urls';

@Component({
  selector: 'ss-intro',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {
  public Urls = Urls;
}
