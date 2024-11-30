import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { Urls } from '@/app/core/utils/urls';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [NgTemplateOutlet, ButtonModule, RouterLink, SvgIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  private _router = inject(Router);

  public currentUser = input.required<IParticipantView>();
  public logout = output<void>();

  public isVisibleMenu = signal(false);

  public Urls = Urls;

  public toggleMenu(): void {
    this.isVisibleMenu.set(!this.isVisibleMenu());
  }

  public logoutClick(): void {
    this.isVisibleMenu.set(false);
    this.logout.emit();
  }

  public signInClick(): void {
    this.isVisibleMenu.set(false);
    this._router.navigate(Urls.SIGN_IN_URL);
  }

  public redirectToProfile(): void {
    this.isVisibleMenu.set(false);
    this._router.navigate(Urls.PROFILE_URL(this.currentUser().id));
  }

  public redirectToIntro(): void {
    this.isVisibleMenu.set(false);
    this._router.navigate(Urls.INTRO_URL);
  }
}
