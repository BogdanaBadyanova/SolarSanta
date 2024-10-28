import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { UrlsService } from '@/app/core/services/urls.service';
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [NgTemplateOutlet, TuiButton, TuiAvatar, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public urls = inject(UrlsService);

  public currentUser = input.required<ICurrentUser>();
}
