import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IDialogPaticipant } from '../../interfaces/idialog-add-participat';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'ss-add-participant-dialog',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './add-participant-dialog.component.html',
  styleUrl: './add-participant-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddParticipantDialogComponent implements OnInit {
  private _dialogRef = inject(DynamicDialogRef);
  private _dialogConfig = inject(DynamicDialogConfig);

  public isSubmitButtonDisabled = this._dialogConfig.data.isSubmitButtonDisabled;
  public submitButtonIcon = this._dialogConfig.data.submitButtonIcon;
  public form = signal<FormGroup>(null);

  public ngOnInit(): void {
    const form = new FormGroup({
      email: new FormControl(),
    });

    this.form.set(form);
  }

  public submit(): void {
    this._dialogRef.close(this.form().getRawValue() as IDialogPaticipant);
  }
}
