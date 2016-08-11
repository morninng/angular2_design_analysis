import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store'
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes'

import {CounterReducer} from './app/ngrx/counter-reducer'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  provideStore({counter: CounterReducer})
]);
