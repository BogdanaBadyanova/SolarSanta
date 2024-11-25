import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
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
export class ProfileComponent implements OnInit {
  public Urls = Urls;
  public userBoxes = signal<{ id: string; name: string; type: BoxLogoEnum }[]>([
    { id: '1', name: 'Первая коробка', type: BoxLogoEnum.Rocket },
    { id: '2', name: 'Коробка 2', type: BoxLogoEnum.Garland },
    { id: '3', name: 'Коробка 3', type: BoxLogoEnum.Hoho },
    { id: '4', name: 'Коробка 4', type: BoxLogoEnum.Gift },
    { id: '5', name: 'Коробка 5', type: BoxLogoEnum.Snowman },
  ]);

  public form = signal<FormGroup>(null);
  public isSubmitButtonDisabled: Signal<boolean>;
  public submitButtonIcon: Signal<string>;
  public currentUser: Signal<ICurrentUser>;

  private _facade = inject(ProfileFacade);

  public ngOnInit(): void {
    this.isSubmitButtonDisabled = this._facade.isSubmitButtonDisabled;
    this.submitButtonIcon = this._facade.submitButtonIcon;
    this.currentUser = this._facade._authService.currentUser;

    const form = new FormGroup({
      about: new FormControl<string>(null),
      interests: new FormControl<string[]>([]),
    });

    this.form.set(form);
    // this.form().patchValue({
    //   about: this.currentUser().about,
    //   interests: this.currentUser().interests.map((i) => i.title)
    // });
  }

  public submit(): void {
    this._facade
      .submit(this.form().getRawValue() as IEditUserProfile)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
