import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxIconComponent } from '../boxes/features/create-box/components/box-icon/box-icon.component';
import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { ProfileFacade } from './services/profile.facade';
import { ICurrentUser } from '@/app/core/interfaces/icurrent-user';
import { GenderPipe } from '@/app/core/pipe/gender.pipe';
import { IEditUserProfile } from './interfaces/iedit-user-profile';

@UntilDestroy()
@Component({
  selector: 'ss-profile',
  standalone: true,
  imports: [
    SvgIconComponent,
    InputTextareaModule,
    ChipsModule,
    FormsModule,
    BoxIconComponent,
    RouterLink,
    ReactiveFormsModule,
    ButtonModule,
    IconFieldModule,
    GenderPipe,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private _facade = inject(ProfileFacade);

  public form = signal<FormGroup>(null);
  public isSubmitButtonDisabled: Signal<boolean>;
  public submitButtonIcon: Signal<string>;
  public user: Signal<ICurrentUser>;

  public Urls = Urls;

  constructor() {
    this.isSubmitButtonDisabled = this._facade.isSubmitButtonDisabled;
    this.submitButtonIcon = this._facade.submitButtonIcon;
    this.user = this._facade._authService.currentUser;

    const form = new FormGroup({
      about: new FormControl<string>(null),
      interests: new FormControl<string[]>([]),
    });

    this.form.set(form);

    effect(() => {
      const user = this.user();
      if (user) {
        this.form().patchValue({
          about: user.about,
          interests: user.interests.map((i) => i.title),
        });
      }
    });
  }

  public submit(): void {
    this._facade
      .submit(this.form().getRawValue() as IEditUserProfile)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
