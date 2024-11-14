import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  ],
  templateUrl: './create-box.component.html',
  styleUrl: './create-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBoxComponent {
  private _dialogService = inject(DialogService);

  private _dialogRef: DynamicDialogRef = null;

  public showSelectBoxIconDialog(): void {
    this._dialogRef = this._dialogService.open(SelectBoxIconComponent, {
      header: 'Выберите логотип коробки',
    });

    this._dialogRef.onClose
      .pipe(
        untilDestroyed(this),
        tap((imageName) => {
          console.log(imageName);
        }),
      )
      .subscribe();
  }
}
