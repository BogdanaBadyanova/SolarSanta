import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@layouts/components/menu/menu.component';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { FooterComponent } from '@layouts/components/footer/footer.component';
import { LayoutLoaderComponent } from '../components/layout-loader/layout-loader.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent, LayoutLoaderComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayoutComponent implements OnInit {
  private _authService = inject(AuthService);

  public currentUser: Signal<IParticipantView | null>;

  public ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
  }

  public logout(): void {
    this._authService.logout();
  }
}
