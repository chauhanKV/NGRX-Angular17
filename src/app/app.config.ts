import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './store/user/user.reducer';
import { UserEffects } from './store/user/user.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './store/cart/cart.reducer';
import { productReducer } from './store/product/product.reducer';
import { ProductEffect } from './store/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState({ name: 'user', reducer: userReducer }),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'product', reducer: productReducer }),
    provideEffects(UserEffects),
    provideEffects(ProductEffect),
  ],
};
