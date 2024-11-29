import { Urls } from '@/app/core/utils/urls';
import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SignInFacade } from './sign-in.facade';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ss-sign-in',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, PasswordModule, ReactiveFormsModule, ButtonModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  private _fb = inject(FormBuilder);
  private _facade = inject(SignInFacade);

  public form = signal<FormGroup>(null);
  public submitButtonIcon: Signal<string>;
  public isSubmitButtonDisabled: Signal<boolean>;

  public Urls = Urls;

  public ngOnInit(): void {
    this.submitButtonIcon = this._facade.submitButtonIcon;
    this.isSubmitButtonDisabled = this._facade.isSubmitButtonDisabled;
    this.form.set(
      this._fb.group({
        email: new FormControl('', [Validators.email]),
        password: new FormControl(),
      }),
    );
  }

  public submit(): void {
    this._facade.submit(this.form().getRawValue()).pipe(untilDestroyed(this)).subscribe();
  }
}
