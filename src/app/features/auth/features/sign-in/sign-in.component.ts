import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'ss-sign-in',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, PasswordModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  public formSingIn: FormGroup
  private _router = inject(Router)

  ngOnInit(): void {
    this.formSingIn = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl()
    })
  }

  retirectTo() {
    this._router.navigate(['/auth/sign-up'])
  }

  submit() {
    console.log(this.formSingIn.value);
  }
}
