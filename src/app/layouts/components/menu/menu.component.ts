import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { UrlsService } from '@/app/core/services/urls.service';
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SvgIconComponent } from 'angular-svg-icon';


@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [NgTemplateOutlet, ButtonModule, AvatarModule, RouterLink, SvgIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public urls = inject(UrlsService);

  public currentUser = input.required<ICurrentUser>();
}
