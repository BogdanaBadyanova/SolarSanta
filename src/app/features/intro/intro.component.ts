import { FooterComponent } from '@/app/layouts/components/footer/footer.component';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ss-intro',
  standalone: true,
  imports: [ButtonModule, FooterComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {}
