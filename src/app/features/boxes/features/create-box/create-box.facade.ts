import { FormFacade } from '@/app/core/services/form.facade';
import { ICreateBox } from '@/app/core/interfaces/create-box';
import { inject, Injectable } from '@angular/core';
import { catchError, combineLatest, finalize, Observable, tap, timer } from 'rxjs';
import { BoxToastEnum } from '../../enums/box-toast.enum';
import { BoxService } from '../../services/box.service';

@Injectable({
  providedIn: 'root',
})
export class CreateBoxFacade extends FormFacade {
  private _boxService = inject(BoxService);

  public override submit(data: ICreateBox): Observable<unknown> {
    this.isLoading.set(true);
    return combineLatest([timer(600), this._boxService.createBox(data)]).pipe(
      tap(() => this._toastService.showMessage(BoxToastEnum.CREATE_BOX_SUCCESS)),
      catchError(() => {
        this._toastService.showMessage(BoxToastEnum.CREATE_BOX_FAILED);
        throw new Error();
      }),
      finalize(() => this.isLoading.set(false)),
    );
  }
}
