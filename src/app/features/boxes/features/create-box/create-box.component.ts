import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SelectBoxIconComponent } from './components/select-box-icon/select-box-icon.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { CreateBoxFacade } from './create-box.facade';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RouterModule } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'ss-create-box',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SvgIconComponent,
    CalendarModule,
    InputSwitchModule,
    ReactiveFormsModule,
    InputNumberModule,
    ImageModule,
    CommonModule,
    InputTextareaModule,
    RouterModule,
  ],
  templateUrl: './create-box.component.html',
  styleUrl: './create-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBoxComponent implements OnInit {
  private _dialogService = inject(DialogService);
  private _facade = inject(CreateBoxFacade);
  private _dialogRef: DynamicDialogRef = null;

  public form = signal<FormGroup>(null);
  public isSubmitButtonDisabled: Signal<boolean>;
  public submitButtonIcon: Signal<string>;
  public boxIcon = signal<string>(null);

  public ngOnInit(): void {
    this.isSubmitButtonDisabled = this._facade.isSubmitButtonDisabled;
    this.submitButtonIcon = this._facade.submitButtonIcon;

    const form = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      icon: new FormControl(),
      inviteEndDate: new FormControl(),
      meetingDate: new FormControl(),
      minGiftValue: new FormControl(),
      maxGiftValue: new FormControl(),
      location: new FormControl(),
      showResults: new FormControl(false),
    });

    this.form.set(form);
  }

  public showSelectBoxIconDialog(): void {
    this._dialogRef = this._dialogService.open(SelectBoxIconComponent, {
      header: 'Выберите логотип коробки',
    });

    this._dialogRef.onClose
      .pipe(
        untilDestroyed(this),
        tap((imageName) => {
          this.boxIcon.set(imageName);
          this.form().get('icon').setValue(imageName);
        }),
      )
      .subscribe();
  }

  public submit(): void {
    this._facade.submit(this.form().getRawValue()).pipe(untilDestroyed(this)).subscribe();
  }
}
