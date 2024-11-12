import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import utc from 'dayjs/plugin/utc';
import isToday from 'dayjs/plugin/isToday';
import dayjs from 'dayjs';

@UntilDestroy()
@Component({
  selector: 'ss-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    dayjs.extend(utc);
    dayjs.extend(isToday);
  }
}
