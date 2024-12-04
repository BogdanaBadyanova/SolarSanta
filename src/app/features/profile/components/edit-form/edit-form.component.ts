import { GenderEnum } from '@/app/core/enums/gender.enum';
import { CommonConstants } from '@/app/core/utils/common-constants';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { IEditUserProfile } from '../../interfaces/iedit-user-profile';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'ss-edit-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    FloatLabelModule,
    FieldsetModule,
  ],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFormComponent implements OnInit {
  private _fb = inject(FormBuilder);
  private _dialogRef = inject(DynamicDialogRef);
  private _dialogConfig = inject(DynamicDialogConfig);

  public form = signal<FormGroup>(null);
  public genders = CommonConstants.genders;

  public ngOnInit(): void {
    this.form.set(
      this._fb.group({
        firstName: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl<string>(''),
        gender: new FormControl<GenderEnum>(null),
        about: new FormControl<string>(''),
      }),
    );
    this.form().patchValue(this._dialogConfig.data.user);
  }

  public submit(): void {
    if (this.form().valid) {
      this._dialogRef.close(this.form().getRawValue() as IEditUserProfile);
    }
  }
}
