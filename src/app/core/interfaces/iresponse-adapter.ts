/**
 * Интерфейс для адаптеров, преобразующих модели между API и приложением.
 * @template TApiModel Тип модели, получаемой от API.
 * @template TAppModel Тип модели, используемой в приложении.
 */
export interface IResponseAdapter<TApiModel, TAppModel> {
  /**
   * Преобразует модель из формата API в формат приложения.
   * @param apiModel Модель из API.
   * @returns Модель для приложения.
   */
  fromApi(apiModel: TApiModel): TAppModel;

  /**
   * Преобразует массив моделей из формата API в формат приложения.
   * @param apiModels Массив моделей из API.
   * @returns Массив моделей для приложения.
   */
  arrayFromApi?(apiModels: TApiModel[]): TAppModel[];
}
