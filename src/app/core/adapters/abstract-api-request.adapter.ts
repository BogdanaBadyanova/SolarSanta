import { IRequestAdapter } from '../interfaces/irequest-adapter';

/**
 * Абстрактный класс для адаптации моделей API и приложений.
 * Предоставляет методы для преобразования одной модели или массивов моделей.
 */
export abstract class AbstractApiRequestAdapter<TApiModel, TAppModel>
  implements IRequestAdapter<TApiModel, TAppModel>
{
  /**
   * Преобразует модель приложения в модель API.
   * @param appModel Модель приложения.
   * @returns Модель API.
   */
  public abstract toApi(appModel: TAppModel): TApiModel;

  /**
   * Преобразует массив моделей приложения в массив моделей API.
   * @param appModels Массив моделей приложения.
   * @returns Массив моделей API.
   */
  public arrayToApi(appModels: TAppModel[]): TApiModel[] {
    return appModels.map(this.toApi.bind(this));
  }
}
