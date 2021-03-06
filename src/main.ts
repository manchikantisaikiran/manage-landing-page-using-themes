import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0K_nojsoWDdxxdOr5-eGYht0bj7gyJNo",
  authDomain: "manage-landing-page-da767.firebaseapp.com",
  projectId: "manage-landing-page-da767",
  storageBucket: "manage-landing-page-da767.appspot.com",
  messagingSenderId: "495973558509",
  appId: "1:495973558509:web:f6b7dcbe90b96f019b84e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
