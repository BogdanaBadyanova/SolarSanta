import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ss-profile',
  standalone: true,
  imports: [SvgIconComponent, InputTextareaModule, ChipsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
