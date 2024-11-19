import { FormFacade } from "@/app/core/services/form.facade";
import { ICreateBox } from "@/app/core/interfaces/create-box";
import { inject, Injectable } from "@angular/core";
import { combineLatest, finalize, Observable, tap } from "rxjs";
import { CreateBoxService } from "@/app/features/boxes/features/create-box/services/create-box.service";
import { CreateBoxEnum } from "../enums/create-box.enum";

@Injectable({
    providedIn: 'root'
})

export class CreateBoxFacade extends FormFacade {

    private _createBoxService = inject(CreateBoxService)

    public override submit(data: ICreateBox): Observable<unknown> {
        this.isLoading.set(true);
        return combineLatest([this._createBoxService.createBox(data)]).pipe(
            tap(() => this._toastService.showMessage(CreateBoxEnum.SUCCESS)),
            finalize(() => this.isLoading.set(false))
        )

    }
}