import { FooterComponent } from '@/app/layouts/components/footer/footer.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Urls } from '../../core/utils/urls';

@Component({
  selector: 'ss-intro',
  standalone: true,
  imports: [ButtonModule, FooterComponent, RouterLink],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  public Urls = Urls;
}
