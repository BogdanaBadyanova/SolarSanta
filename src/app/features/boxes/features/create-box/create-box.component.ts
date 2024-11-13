import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'ss-create-box',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SvgIconComponent,
    CalendarModule,
    InputSwitchModule,
  ],
  templateUrl: './create-box.component.html',
  styleUrl: './create-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBoxComponent {}
