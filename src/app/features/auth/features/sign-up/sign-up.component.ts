import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SignUpFacade } from './sign-up.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ss-sign-up',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  private _fb = inject(FormBuilder);
  private _facade = inject(SignUpFacade);

  public form = signal<FormGroup>(null);
  public submitButtonIcon = this._facade.submitButtonIcon;
  public isSubmitButtonDisabled = this._facade.isSubmitButtonDisabled;

  public ngOnInit(): void {
    this.form.set(
      this._fb.group({
        firstName: new FormControl(''),
        email: new FormControl('', [Validators.email]),
        password: new FormControl(),
        confirmPassword: new FormControl(),
      }),
    );
  }

  public submit(): void {
    this._facade.submit(this.form().getRawValue()).pipe(untilDestroyed(this)).subscribe();
  }
}
