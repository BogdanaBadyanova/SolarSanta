import { IResponseAdapter } from '../interfaces/iresponse-adapter';

/**
 * Абстрактный класс для адаптации моделей API и приложений.
 * Предоставляет методы для преобразования одной модели или массивов моделей.
 */
export abstract class AbstractApiResponseAdapter<TApiModel, TAppModel>
  implements IResponseAdapter<TApiModel, TAppModel>
{
  /**
   * Преобразует модель из API в модель приложения.
   * @param apiModel Модель из API.
   * @returns Модель приложения.
   */
  public abstract fromApi(apiModel: TApiModel): TAppModel;

  /**
   * Преобразует массив моделей из API в массив моделей приложения.
   * @param apiModels Массив моделей API.
   * @returns Массив моделей приложения.
   */
  public arrayFromApi(apiModels: TApiModel[]): TAppModel[] {
    return apiModels.map(this.fromApi.bind(this));
  }
}
