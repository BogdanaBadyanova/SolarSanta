import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { UrlsService } from '@/app/core/services/urls.service';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SvgIconComponent } from 'angular-svg-icon';


@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [NgTemplateOutlet, ButtonModule, AvatarModule, RouterLink, SvgIconComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public urls = inject(UrlsService);
  private _router: Router

  public isVisibleMenu = false;

  public currentUser = input.required<ICurrentUser>();

  public openMenu() {   
    this.isVisibleMenu = !this.isVisibleMenu
  }

  public closeMenu() {    
    this.isVisibleMenu = !this.isVisibleMenu
  }

  public toRedirect() {
    this.isVisibleMenu = false
    this._router.navigate(["/intro"]);
  }
 }
