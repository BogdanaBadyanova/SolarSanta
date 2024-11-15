import { Urls } from '@/app/core/utils/urls';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'ss-sign-in',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  private _fb = inject(FormBuilder);

  public Urls = Urls;

  public form = signal<FormGroup>(null);

  public ngOnInit(): void {
    this.form.set(
      this._fb.group({
        email: new FormControl('', [Validators.email]),
        password: new FormControl(),
      }),
    );
  }

  public submit(): void {
    console.log(this.form().value);
  }
}
