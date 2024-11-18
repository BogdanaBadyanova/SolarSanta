import { computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from './toast/toast.service';

export abstract class FormFacade {
  protected _router = inject(Router);
  protected _toastService = inject(ToastService);

  public isLoading = signal(false);
  public submitButtonIcon = computed(() => (this.isLoading() ? 'pi pi-spinner pi-spin' : ''));
  public isSubmitButtonDisabled = computed(() => this.isLoading());

  public abstract submit(data: unknown): Observable<unknown>;
}
