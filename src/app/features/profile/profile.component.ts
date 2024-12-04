import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, Signal } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxIconComponent } from '../boxes/features/create-box/components/box-icon/box-icon.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Urls } from '@/app/core/utils/urls';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { GenderPipe } from '@/app/core/pipe/gender.pipe';
import { IEditUserProfile } from './interfaces/iedit-user-profile';
import { PROFILE_FACADE_TOKEN } from './tokens/profile-facade.token';
import { profileFacadeFactory } from './services/profile-facade.factory';
import { switchMap, tap } from 'rxjs';
import { IProfileData } from './interfaces/iprofile-data';

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
  providers: [
    {
      provide: PROFILE_FACADE_TOKEN,
      useFactory: profileFacadeFactory,
      deps: [ActivatedRoute],
    },
  ],
})
export class ProfileComponent implements OnInit {
  private _facade = inject(PROFILE_FACADE_TOKEN);
  private _route = inject(ActivatedRoute);
  private _cdr = inject(ChangeDetectorRef);

  public form: Signal<FormGroup>;
  public isSubmitButtonDisabled: Signal<boolean>;
  public submitButtonIcon: Signal<string>;
  public profileTitle: Signal<string>;
  public canEditProfile: Signal<boolean>;
  public user: Signal<IParticipantView>;

  public Urls = Urls;

  public ngOnInit(): void {
    this._route.params
      .pipe(
        switchMap((params) => this._facade.init(params['id'])),
        tap((data: IProfileData) => {
          this.user = data.user;
          this.form = data.form;
          this.profileTitle = data.profileTitle;
          this.canEditProfile = data.canEditProfile;
          this.isSubmitButtonDisabled = data.isSubmitButtonDisabled;
          this.submitButtonIcon = data.submitButtonIcon;
          this._cdr.markForCheck();
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public submit(): void {
    if (this.canEditProfile() && this.form().valid) {
      this._facade
        .submit(this.form().getRawValue() as IEditUserProfile)
        .pipe(untilDestroyed(this))
        .subscribe();
    }
  }

  public editProfile(): void {
    if (this.canEditProfile()) {
      this._facade.editProfile();
    }
  }
}
