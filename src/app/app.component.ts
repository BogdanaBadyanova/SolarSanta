import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import utc from 'dayjs/plugin/utc';
import isToday from 'dayjs/plugin/isToday';
import dayjs from 'dayjs';

@Component({
  selector: 'ss-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    dayjs.extend(utc);
    dayjs.extend(isToday);
  }
}
