import { Observable } from 'rxjs';

export abstract class FormFacade {
  public abstract submit(data: unknown): Observable<unknown>;
}
