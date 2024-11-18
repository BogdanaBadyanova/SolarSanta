import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { routes } from '@layouts/routing/layout.routes';
import { MessageService } from 'primeng/api';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { ApiConfiguration, ApiModule } from '@/app/infrastructure';
import { environment } from '@/environments/environment';

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
    MessageService,
    DialogService,
  ],
};
