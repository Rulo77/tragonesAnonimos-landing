import { ApplicationConfig, provideZoneChangeDetection  } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: 'disabled', // 'disabled' | 'enabled' | 'top'
    anchorScrolling: 'disabled',           // 'enabled' | 'disabled'
  }))]
};
