import { computed, signal } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class FormFacade {
  public isLoading = signal(false);

  public submitButtonIcon = computed(() => (this.isLoading() ? 'pi pi-spinner pi-spin' : ''));

  public isSubmitButtonDisabled = computed(() => this.isLoading());

  public abstract submit(data: unknown): Observable<unknown>;
}
