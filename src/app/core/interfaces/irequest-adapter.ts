/**
 * Интерфейс для адаптеров, преобразующих модели между API и приложением.
 * @template TApiModel Тип модели, получаемой от API.
 * @template TAppModel Тип модели, используемой в приложении.
 */
export interface IRequestAdapter<TApiModel, TAppModel> {
  /**
   * Преобразует модель из формата приложения в формат API.
   * @param appModel Модель для приложения.
   * @returns Модель для API.
   */
  toApi(appModel: TAppModel): TApiModel;

  /**
   * Преобразует массив моделей из формата приложения в формат API.
   * @param appModels Массив моделей для приложения.
   * @returns Массив моделей для API.
   */
  arrayToApi?(appModels: TAppModel[]): TApiModel[];
}
