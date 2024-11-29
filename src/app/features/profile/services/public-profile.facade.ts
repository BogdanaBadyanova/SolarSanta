import { inject, Injectable, signal } from '@angular/core';
import { Observable, map, first } from 'rxjs';
import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { AbstractProfileFacade } from './abstract-profile.facade';
import { ApiParticipantViewAdapter } from '@/app/core/adapters/api-participant-view.adapter';

@Injectable()
export class PublicProfileFacade extends AbstractProfileFacade {
  private _apiParticipantViewAdapter = inject(ApiParticipantViewAdapter);

  protected override _profileTitle = signal<string>('Профиль');

  public getUser(id: string): Observable<IParticipantView | null> {
    return this._userApiService.idGet({ id }).pipe(
      first(),
      map((user) => this._apiParticipantViewAdapter.fromApi(user)),
    );
  }
}
