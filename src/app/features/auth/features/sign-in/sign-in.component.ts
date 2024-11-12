import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class SignInComponent implements OnInit{
  formSingIn: FormGroup

  ngOnInit(): void {
    this.formSingIn = new FormGroup({
      email: new FormControl('',[Validators.email]),
      password: new FormControl()
    })
  }

  submit(){
    console.log(this.formSingIn.value);
}
}
