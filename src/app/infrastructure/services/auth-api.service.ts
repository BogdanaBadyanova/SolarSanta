import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiSignUpRequest } from '../models/api-sign-up-request';
import { ApiSignInRequest } from '../models/api-sign-in-request';
import { ApiCurrentUser } from '../models/api-current-user';
import { ApiAuthResult } from '../models/api-auth-result';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly apiUrl = '/api/auth';

  constructor(private _http: HttpClient) {}

  /**
   * Метод для регистрации нового пользователя
   * @param signUpData - данные для регистрации
   * @returns Observable<boolean> - true, если регистрация успешна
   */
  signUp(signUpData: ApiSignUpRequest): Observable<boolean> {
    return this._http.post<boolean>(`${this.apiUrl}/signup`, signUpData);
  }

  /**
   * Метод для аутентификации пользователя
   * @param signInData - данные для входа
   * @returns Observable<ApiAuthResult> - объект с информацией о токене и его сроке действия
   */
  signIn(signInData: ApiSignInRequest): Observable<ApiAuthResult> {
    return this._http.post<ApiAuthResult>(`${this.apiUrl}/signin`, signInData);
  }

  /**
   * Метод для получения информации о текущем пользователе
   * @returns Observable<ApiCurrentUser> - объект с данными текущего пользователя
   */
  getCurrentUser(): Observable<ApiCurrentUser> {
    return this._http.get<ApiCurrentUser>(`${this.apiUrl}/current-user`);
  }
}
