import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { routes } from '@layouts/routing/layout.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { ApiConfiguration, ApiModule } from '@/app/infrastructure';
import { environment } from '@/environments/environment';
import { TokenInterceptor } from './core/interceptor/token.interceptor';

const apiConfig: ApiConfiguration = {
  rootUrl: environment.apiUrl,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(ApiModule.forRoot(apiConfig)),
    provideRouter(routes),
    provideAngularSvgIcon(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MessageService,
    DialogService,
    ConfirmationService,
  ],
};
