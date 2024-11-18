import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@layouts/components/menu/menu.component';
import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { AuthService } from '@/app/features/auth/services/auth.service';
import { BoxDetailsComponent } from '@/app/features/boxes/features/box-details/box-details.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, MenuComponent, BoxDetailsComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayoutComponent implements OnInit {
  private _authService = inject(AuthService);
  public currentUser: Signal<ICurrentUser | null>;

  public ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
  }
}
