import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { RuLocale } from './core/locales';
import { PrimeNGConfig } from 'primeng/api';
import utc from 'dayjs/plugin/utc';
import isToday from 'dayjs/plugin/isToday';
import dayjs from 'dayjs';

@Component({
  selector: 'ss-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private _config: PrimeNGConfig) {
    dayjs.extend(utc);
    dayjs.extend(isToday);
  }

  public ngOnInit(): void {
    this._config.setTranslation(new RuLocale());
  }
}
