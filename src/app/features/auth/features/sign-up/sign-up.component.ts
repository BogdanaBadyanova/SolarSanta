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

  public form = signal<FormGroup>(null);

  public ngOnInit(): void {
    this.form.set(
      this._fb.group({
        username: new FormControl(''),
        email: new FormControl('', [Validators.email]),
        password: new FormControl(),
        confirmPassword: new FormControl(),
      }),
    );
  }

  public submit(): void {
    console.log(this.form().value);
  }
}
