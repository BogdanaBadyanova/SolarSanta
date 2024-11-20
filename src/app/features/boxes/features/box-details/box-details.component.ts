import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ParticipantsComponent } from './components/participants/participants.component';
import { BoxDetailsFacade } from './box-details.facade';
import { Observable, switchMap } from 'rxjs';
import { IBoxDetails } from './interfaces/detail-box';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { DateFormatPipe } from '@/app/core/pipe/date-format.pipe';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'ss-box-details',
  standalone: true,
  imports: [ButtonModule, ParticipantsComponent, NgIf, AsyncPipe, DateFormatPipe, ImageModule],
  templateUrl: './box-details.component.html',
  styleUrl: './box-details.component.scss',
})
export class BoxDetailsComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _boxDetailsFacade = inject(BoxDetailsFacade);

  public data$: Observable<IBoxDetails>;

  public ngOnInit(): void {
    this.data$ = this._route.params.pipe(
      switchMap((params) => this._boxDetailsFacade.getBoxData(params['id'])),
    );
  }
}
