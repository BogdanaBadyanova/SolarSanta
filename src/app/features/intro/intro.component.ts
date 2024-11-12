import { FooterComponent } from '@/app/layouts/components/footer/footer.component';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ss-intro',
  standalone: true,
  imports: [ButtonModule, SvgIconComponent, FooterComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {}
