import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { UrlsService } from '@/app/core/services/urls.service';
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [NgTemplateOutlet, ButtonModule, AvatarModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public urls = inject(UrlsService);

  public currentUser = input.required<ICurrentUser>();
}
