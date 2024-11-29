import { IParticipantView } from '@/app/core/interfaces/iparticipant-view';
import { Signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface IProfileData {
  form: Signal<FormGroup>;
  user: Signal<IParticipantView>;
  canEditProfile: Signal<boolean>;
  submitButtonIcon: Signal<string>;
  isSubmitButtonDisabled: Signal<boolean>;
  profileTitle: Signal<string>;
}
