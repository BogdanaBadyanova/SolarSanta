import { IAdapter } from '../interfaces/iadapter';

/**
 * Абстрактный класс для адаптации моделей API и приложений.
 * Предоставляет методы для преобразования одной модели или массивов моделей.
 */
export abstract class AbstractApiAdapter<TApiModel, TAppModel>
  implements IAdapter<TApiModel, TAppModel>
{
  /**
   * Преобразует модель из API в модель приложения.
   * @param apiModel Модель из API.
   * @returns Модель приложения.
   */
  abstract fromApi(apiModel: TApiModel): TAppModel;

  /**
   * Преобразует модель приложения в модель API.
   * @param appModel Модель приложения.
   * @returns Модель API.
   */
  abstract toApi(appModel: TAppModel): TApiModel;

  /**
   * Преобразует массив моделей из API в массив моделей приложения.
   * @param apiModels Массив моделей API.
   * @returns Массив моделей приложения.
   */
  public arrayFromApi(apiModels: TApiModel[]): TAppModel[] {
    return apiModels.map(this.fromApi.bind(this));
  }

  /**
   * Преобразует массив моделей приложения в массив моделей API.
   * @param appModels Массив моделей приложения.
   * @returns Массив моделей API.
   */
  public arrayToApi(appModels: TAppModel[]): TApiModel[] {
    return appModels.map(this.toApi.bind(this));
  }
}
