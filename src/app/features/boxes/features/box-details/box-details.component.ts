import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ParticipantsComponent } from './components/participants/participants.component';
import { BoxDetailsFacade } from './box-details.facade';
import { Observable, switchMap, tap } from 'rxjs';
import { IBoxDetails } from './interfaces/detail-box';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { DateFormatPipe } from '@/app/core/pipe/date-format.pipe';
import { ImageModule } from 'primeng/image';
import { SantaInfoComponent } from './components/santa-info/santa-info.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ss-box-details',
  standalone: true,
  imports: [
    ButtonModule,
    ParticipantsComponent,
    NgIf,
    AsyncPipe,
    DateFormatPipe,
    ImageModule,
    SantaInfoComponent,
  ],
  templateUrl: './box-details.component.html',
  styleUrl: './box-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxDetailsComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _boxDetailsFacade = inject(BoxDetailsFacade);

  public data$: Observable<IBoxDetails>;
  public boxId = '';

  public ngOnInit(): void {
    this.data$ = this._route.params.pipe(
      tap((params) => (this.boxId = params['id'])),
      switchMap((params) => this._boxDetailsFacade.getBoxData(params['id'])),
    );
  }
  public deletebox(): void {
    this._boxDetailsFacade.deleteBox(this.boxId).pipe(untilDestroyed(this)).subscribe();
  }
}
