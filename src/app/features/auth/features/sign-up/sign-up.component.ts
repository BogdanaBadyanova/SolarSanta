import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'ss-sign-up',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, PasswordModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit{
  public formSingUp: FormGroup

  ngOnInit(): void {
    this.formSingUp = new FormGroup({
      username: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      password: new FormControl(),
      ConfirmPassword: new FormControl()
    })
  }

  submit() {
    console.log(this.formSingUp.value);
  }

}
