import { Component, signal } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { BoxIconComponent } from '../boxes/features/create-box/components/box-icon/box-icon.component';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'ss-profile',
  standalone: true,
  imports: [SvgIconComponent, InputTextareaModule, ChipsModule, FormsModule, BoxIconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public userBoxes = signal<{ name: string; type: BoxLogoEnum }[]>([
    { name: 'Первая коробка', type: BoxLogoEnum.Rocket },
    { name: 'Коробка 2', type: BoxLogoEnum.Garland },
    { name: 'Коробка 3', type: BoxLogoEnum.Hoho },
  ]);
}
