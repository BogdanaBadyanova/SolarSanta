import { Component, signal } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { BoxIconComponent } from '../boxes/features/create-box/components/box-icon/box-icon.component';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';

@Component({
  selector: 'ss-profile',
  standalone: true,
  imports: [
    SvgIconComponent,
    InputTextareaModule,
    ChipsModule,
    FormsModule,
    BoxIconComponent,
    RouterLink,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public Urls = Urls;
  public userBoxes = signal<{ id: string; name: string; type: BoxLogoEnum }[]>([
    { id: '1', name: 'Первая коробка', type: BoxLogoEnum.Rocket },
    { id: '2', name: 'Коробка 2', type: BoxLogoEnum.Garland },
    { id: '3', name: 'Коробка 3', type: BoxLogoEnum.Hoho },
    { id: '4', name: 'Коробка 4', type: BoxLogoEnum.Gift },
    { id: '5', name: 'Коробка 5', type: BoxLogoEnum.Snowman },
  ]);
}
