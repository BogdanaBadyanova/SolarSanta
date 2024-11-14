import { BoxLogoEnum } from '@/app/core/enums/box-logo.enum';
import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { BoxIconComponent } from '../box-icon/box-icon.component';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ButtonModule, BoxIconComponent],
  templateUrl: './select-box-icon.component.html',
  styleUrl: './select-box-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectBoxIconComponent {
  private _dialogRef = inject(DynamicDialogRef);

  public selected = output<BoxLogoEnum>();

  public selectedItemType: BoxLogoEnum = null;
  public images = Object.values(BoxLogoEnum).map((type) => ({ type }));

  public setSelectedIcon(): void {
    this._dialogRef.close(this.selectedItemType);
  }
}
