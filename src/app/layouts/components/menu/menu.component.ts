import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { Urls } from '@/app/core/utils/urls';
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [NgTemplateOutlet, ButtonModule, RouterLink, SvgIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  private _router = inject(Router);

  public currentUser = input.required<ICurrentUser>();

  public isVisibleMenu = signal(false);

  public Urls = Urls;

  public toggleMenu() {
    this.isVisibleMenu.set(!this.isVisibleMenu());
  }

  public redirectToIntro() {
    this.isVisibleMenu.set(false);
    this._router.navigate(Urls.INTRO_URL);
  }
}
