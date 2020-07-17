import { akitaConfig } from '@datorama/akita';
import { enableProdMode } from '@angular/core';
import { persistState } from '@datorama/akita';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

akitaConfig({
  resettable: true,
});

persistState();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
