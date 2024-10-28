import { IRequestAdapter } from './irequest-adapter';
import { IResponseAdapter } from './iresponse-adapter';

/**
 * Интерфейс для адаптеров, преобразующих модели между API и приложением.
 * @template TApiModel Тип модели, получаемой от API.
 * @template TAppModel Тип модели, используемой в приложении.
 */
export interface IAdapter<TApiModel, TAppModel>
  extends IRequestAdapter<TApiModel, TAppModel>,
    IResponseAdapter<TApiModel, TAppModel> {}
