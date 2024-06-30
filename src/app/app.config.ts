import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export const firebaseConfig = {
  apiKey: "AIzaSyAG3G7pX_LJoVhEuZqupzSTVqqsYu1nl9k",
  authDomain: "projekt-angular-2c6c1.firebaseapp.com",
  projectId: "projekt-angular-2c6c1",
  storageBucket: "projekt-angular-2c6c1.appspot.com",
  messagingSenderId: "55175923224",
  appId: "1:55175923224:web:29a4bdee8a02017900e56d"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
      FormsModule,
      ReactiveFormsModule,
    ),
  ]
};
